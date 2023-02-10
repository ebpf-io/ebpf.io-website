import { useState } from 'react';
import { useCookie, useLocalStorage, useLocation } from 'react-use';

import submitHubspotForm from 'utils/submit-hubspot-form';

const HUBSPOT_FORM_ID = 'ef11d76b-e770-455f-903b-246d91db193d';
const emailRegexp =
  // eslint-disable-next-line no-control-regex, no-useless-escape
  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

const useSubscribeForm = () => {
  const [formState, setFormState] = useState('default');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useLocalStorage('subscribeEchoNewsFormSubmitted', []);
  // HubSpot cookie tracking
  // read more: https://legacydocs.hubspot.com/docs/methods/forms/submit_form
  const [hubspotutk] = useCookie('hubspotutk');
  const { href } = useLocation();
  const handleInputChange = (event) => {
    setEmail(event.target.value.trim());
    setErrorMessage(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = [{ name: 'email', value: email }];
    const context = {
      hutk: hubspotutk,
      pageUri: href,
    };

    if (!email) {
      setErrorMessage('Email address is required field');
    } else if (!emailRegexp.test(email)) {
      setErrorMessage('Please enter a valid email');
    } else if (submittedEmail.includes(email)) {
      setErrorMessage('You have already submitted this email');
    } else {
      setSubmittedEmail([...submittedEmail, email]);
      setIsLoading(true);

      try {
        await submitHubspotForm(HUBSPOT_FORM_ID, fields, context);
        setErrorMessage(null);
        setFormState('success');
        setEmail('Thanks for subscribing!');
        setIsLoading(false);
      } catch (error) {
        setFormState('error');
        setIsLoading(false);
        setErrorMessage('Something went wrong. Please reload the page and try again');
      }
    }
  };

  return {
    formState,
    isLoading,
    errorMessage,
    email,
    handleInputChange,
    handleSubmit,
  };
};

export default useSubscribeForm;
