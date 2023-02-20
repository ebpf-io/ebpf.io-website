import clsx from 'clsx';
import { AnimatePresence, LazyMotion, m, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button/button';
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
    <span className="absolute left-1/2 top-[calc(100%+0.5rem)] w-full -translate-x-1/2 text-xs font-medium text-secondary-red lg:text-center">
      {serverError}
    </span>
  );
};

const SubscriptionForm = ({ className, size }) => {
  const { formState, isLoading, errorMessage, email, handleInputChange, handleSubmit } =
    useSubscribeForm();

  const lgSize = size === 'lg';
  const mdSize = size === 'md';
  const smSize = size === 'sm';

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={clsx(
          'flex items-center rounded-lg text-white lg:flex-col lg:space-x-0 lg:space-y-8 lg:px-9 md:px-7 sm:px-5',
          {
            'space-x-10 px-11 py-9': smSize,
            'space-x-[60px] py-11 pl-14 pr-20': mdSize,
            'justify-between space-x-12 p-14 pb-[60px]': lgSize,
          },
          className
        )}
        style={{
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1), 0px 10px 24px rgba(0, 0, 0, 0.2)',
          background:
            'linear-gradient(59.49deg, rgba(255, 238, 153, 0.16) 0%, rgba(255, 238, 153, 0) 72.04%), #1A1A1A',
        }}
      >
        <div className="lg:text-center">
          <h2
            className={clsx('font-sans font-bold leading-tight', {
              'text-4xl': size === 'sm',
              'text-6xl': mdSize,
              'heading-8xl': lgSize,
            })}
          >
            <span className={clsx({ 'text-primary-yellow': mdSize || lgSize })}>Subscribe</span> to
            bi-weekly eCHO News
          </h2>
          <p
            className={clsx('mt-1.5', {
              'text-sm': smSize,
              'text-base': mdSize,
              'text-lg': lgSize,
            })}
          >
            Keep up on the latest news and information from the eBPF and Cilium
          </p>
        </div>
        <form
          className={clsx('relative grow text-black lg:w-full', {
            'max-w-[400px]': smSize,
            'max-w-[500px]': mdSize,
            'max-w-[460px]': lgSize,
          })}
          onSubmit={handleSubmit}
        >
          <input
            className={clsx(
              'remove-autocomplete-styles h-12 w-full rounded-[46px] border-2 py-3 pl-5 pr-14 text-base leading-none transition-colors duration-200 placeholder:text-gray-70 focus:outline-none',
              errorMessage
                ? 'border-secondary-red hover:border-secondary-red focus:border-secondary-red'
                : 'border-transparent',
              formState === 'success' && 'font-medium',
              lgSize && 'ml-0 h-[60px]'
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
          <AnimatePresence>
            {formState === 'default' && (
              <m.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={appearAndExitAnimationVariants}
              >
                <Button
                  className={clsx(
                    'absolute inset-y-0 -right-px h-12 !rounded-[54px] border border-primary-yellow font-sans hover:border-[#FFF04C] sm:flex sm:items-center sm:justify-center sm:p-0',
                    {
                      'w-12': smSize,
                      'w-[193px] sm:w-12': mdSize,
                      'top-1.5 right-1.5 w-[160px] sm:w-12': lgSize,
                    }
                  )}
                  type="submit"
                  theme="primary-yellow-filled"
                  style={{ boxShadow: '0px 4px 12px rgba(143, 126, 0, 0.2)' }}
                  loading={isLoading}
                >
                  <span className={clsx({ hidden: smSize, 'sm:hidden': mdSize || lgSize })}>
                    Subscribe
                  </span>
                  {!isLoading && (
                    <SendIcon
                      className={clsx('ml-1 h-6 w-6 sm:block', { hidden: mdSize || lgSize })}
                    />
                  )}
                </Button>
              </m.div>
            )}
          </AnimatePresence>
          {/* Success state */}
          <AnimatePresence>
            {(formState === 'success' || formState === 'error') && (
              <m.div
                className={clsx('absolute top-1/2 -right-px -translate-y-1/2', {
                  'right-1.5': lgSize,
                })}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={appearAndExitAnimationVariants}
                aria-hidden
              >
                {formState === 'success' && <CheckIcon className="h-12 w-12" />}
                {formState === 'error' && <ErrorIcon className="h-12 w-12" />}
              </m.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </LazyMotion>
  );
};

SubscriptionForm.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

SubscriptionForm.defaultProps = {
  className: null,
  size: 'sm',
};

export default SubscriptionForm;
