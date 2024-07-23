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

const SubscriptionForm = ({
  title,
  description,
  placeholder,
  buttonTitle,
  className,
  size,
  isVertical,
}) => {
  const { formState, isLoading, errorMessage, email, handleInputChange, handleSubmit } =
    useSubscribeForm();

  const lgSize = size === 'lg';
  const mdSize = size === 'md';
  const smSize = size === 'sm';

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={clsx(
          'w-full items-center rounded-lg text-white lg:flex-col lg:space-x-0 lg:space-y-8 lg:px-9 md:px-7 sm:px-5',
          isVertical ? 'flex flex-col' : 'flex',
          {
            'space-x-10 px-11 py-9': smSize && !isVertical,
            'space-x-[60px] py-11 pl-14 pr-20': mdSize && !isVertical,
            'justify-between space-x-12 p-14 pb-[60px]': lgSize && !isVertical,
            'pb-14 pt-11': isVertical,
          },
          className
        )}
        style={{
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1), 0px 10px 24px rgba(0, 0, 0, 0.2)',
          background:
            'linear-gradient(59.49deg, rgba(255, 238, 153, 0.16) 0%, rgba(255, 238, 153, 0) 72.04%), #1A1A1A',
        }}
      >
        <div className={clsx(isVertical ? 'text-center' : 'lg:text-center')}>
          <h2
            className={clsx('max-w-[652px] font-sans font-bold leading-tight', {
              'text-4xl': size === 'sm',
              'text-6xl': mdSize,
              'heading-8xl': lgSize,
              '[&>span]:text-primary-yellow': mdSize || lgSize,
            })}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className={clsx('mt-1.5', {
              'text-sm': smSize,
              'text-base': mdSize,
              'text-lg': lgSize,
            })}
          >
            {description}
          </p>
        </div>
        <form
          className={clsx('relative grow text-black lg:w-full', {
            'max-w-[400px]': smSize && !isVertical,
            'max-w-[500px]': mdSize && !isVertical,
            'max-w-[460px]': lgSize && !isVertical,
            'mt-7 w-full max-w-[500px]': isVertical,
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
            placeholder={placeholder}
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
                      'right-1.5 top-1.5 w-[160px] sm:w-12': lgSize,
                    }
                  )}
                  type="submit"
                  theme="primary-yellow-filled"
                  style={{ boxShadow: '0px 4px 12px rgba(143, 126, 0, 0.2)' }}
                  loading={isLoading}
                >
                  <span className="sr-only">Subscribe</span>
                  <span className={clsx({ hidden: smSize, 'sm:hidden': mdSize || lgSize })}>
                    {buttonTitle}
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
                className={clsx('absolute -right-px top-1/2 -translate-y-1/2', {
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  isVertical: PropTypes.bool,
};

SubscriptionForm.defaultProps = {
  className: null,
  size: 'sm',
  isVertical: false,
};

export default SubscriptionForm;
