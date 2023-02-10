import clsx from 'clsx';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import React from 'react';

import Button from 'components/shared/button';
import useSubscribeForm from 'hooks/use-subscribe-form';
import CheckIcon from 'icons/check.inline.svg';
import ErrorIcon from 'icons/error.inline.svg';
import SendIcon from 'icons/send.inline.svg';

const APPEAR_AND_EXIT_ANIMATION_DURATION = 0.2;

const appearAndExitAnimationVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: APPEAR_AND_EXIT_ANIMATION_DURATION } },
  exit: { opacity: 0, transition: { duration: APPEAR_AND_EXIT_ANIMATION_DURATION } },
};

// eslint-disable-next-line react/prop-types
const ErrorMessage = ({ serverError }) => {
  if (!serverError) {
    return null;
  }
  return (
    <span className="absolute left-1/2 top-[calc(100%+0.5rem)] w-full -translate-x-1/2 font-medium text-secondary-red sm:text-sm">
      {serverError}
    </span>
  );
};

const SubscribeForm = () => {
  const { formState, isLoading, errorMessage, email, handleInputChange, handleSubmit } =
    useSubscribeForm();
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative mx-auto w-full max-w-[524px]">
        <m.form className="relative mt-9 flex justify-center" method="POST" onSubmit={handleSubmit}>
          <input
            className={clsx(
              'remove-autocomplete-styles h-14 w-full rounded-[46px] py-3.5 pl-6 pr-[193px] leading-none transition-colors duration-200 placeholder:text-gray-70 focus:outline-none sm:pr-14',
              errorMessage
                ? 'border-2 border-secondary-red hover:border-secondary-red focus:border-secondary-red'
                : 'border border-gray-70 focus:border-gray-40 read-only:focus:border-gray-70',
              formState === 'success' && 'font-medium'
            )}
            type="email"
            name="email"
            placeholder="Email address..."
            autoComplete="email"
            readOnly={formState !== 'default'}
            value={email}
            onChange={handleInputChange}
          />
          <ErrorMessage serverError={errorMessage} />
          {/* Button */}
          <AnimatePresence>
            {formState === 'default' && (
              <m.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={appearAndExitAnimationVariants}
              >
                <Button
                  className="absolute -right-px h-14 !rounded-[54px] border border-primary-yellow px-[58px] font-sans hover:border-[#FFF04C] sm:flex sm:w-14 sm:items-center sm:justify-center sm:p-0"
                  type="submit"
                  theme="primary-yellow-filled"
                  style={{ boxShadow: '0px 4px 12px rgba(143, 126, 0, 0.2)' }}
                  loading={isLoading}
                >
                  <span className="sm:sr-only">Subscribe</span>
                  {!isLoading && <SendIcon className="ml-1 hidden h-6 w-6 sm:block" />}
                </Button>
              </m.div>
            )}
          </AnimatePresence>
        </m.form>
        {/* Success state */}
        <AnimatePresence>
          {(formState === 'success' || formState === 'error') && (
            <m.div
              className={clsx('absolute top-1/2 -right-px -translate-y-1/2')}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={appearAndExitAnimationVariants}
              aria-hidden
            >
              {formState === 'success' && <CheckIcon className="h-14 w-14" />}
              {formState === 'error' && <ErrorIcon className="h-14 w-14" />}
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
};

export default SubscribeForm;
