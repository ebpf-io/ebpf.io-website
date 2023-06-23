/* eslint-disable consistent-return */
import { useEffect } from 'react';

const FORM_JS_SRC = 'https://js.hsforms.net/forms/v2.js';
const PORTAL_ID = '9197153';

const injectScript = () =>
  new Promise((resolve) => {
    const existScript = document.head.querySelector(`script[src="${FORM_JS_SRC}"]`);
    if (existScript) {
      resolve();
    } else {
      const newScript = document.createElement('script');
      newScript.onload = resolve;
      newScript.src = FORM_JS_SRC;
      document.head.appendChild(newScript);
    }
  });

export const initForm = async (element) => {
  await injectScript();
  const formId = element.getAttribute('data-form-id');
  window.hbspt.forms.create({
    portalId: PORTAL_ID,
    formId,
    target: `div[data-form-id='${formId}']`,
  });
};

export default function useHubspotForm(lazyBlockSelector) {
  useEffect(() => {
    const elements = document.getElementsByClassName(lazyBlockSelector);
    Array.from(elements).forEach((element) => {
      initForm(element);
    });
  }, [lazyBlockSelector]);
}
