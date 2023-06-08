/* eslint-disable import/no-extraneous-dependencies */
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import React, { useState, Fragment } from 'react';

import Button from 'components/shared/button';
import FormModal from 'components/shared/form-modal';
import Link from 'components/shared/link';
import BeeIcon from 'icons/bee.inline.svg';
import Logo from 'images/logo.inline.svg';

const SummitHeader = ({ navigation, mobileNavigation, hubspotFormId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  return (
    <div className="relative z-20">
      <Popover>
        {({ open }) => (
          <>
            <div className="container pt-5 pb-4">
              <nav className="relative flex items-center justify-between" aria-label="Global">
                <div className="-mt-2.5 flex flex-none items-center lg:flex-1">
                  <div className="flex w-auto items-center justify-between lg:w-full">
                    <Link to="https://ebpf.io/">
                      <span className="sr-only">eBPF</span>
                      <Logo className="h-12 w-auto sm:h-8" aria-label="Logo" />
                    </Link>
                    <div className="-mr-2 hidden items-center lg:flex">
                      <Popover.Button className="hover:text-gray-5 hover:bg-gray-100 focus-visible:ring-outline inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus-visible:ring-2">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-10 xl:space-x-8 lg:hidden">
                  {navigation.map(({ name, href, target }, index) => (
                    <a
                      className="hover:text-gray-1 font-bold leading-none transition-colors duration-200"
                      key={index}
                      href={href}
                      target={target}
                    >
                      {name}
                    </a>
                  ))}
                </div>

                <Button
                  className="flex gap-x-2.5 rounded-lg text-base font-extrabold lg:hidden"
                  type="button"
                  size="xs"
                  theme="black-filled"
                  onClick={openModal}
                >
                  <BeeIcon className="h-5 w-auto" />
                  <span>Register</span>
                </Button>
              </nav>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                className="absolute inset-x-0 top-0 z-50 hidden origin-top-right transform p-2 transition lg:block"
                focus
                static
              >
                <div className="ring-gray-900 overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <Logo className="h-8 w-auto" aria-label="Logo" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="hover:text-gray-5 hover:bg-gray-100 focus-visible:ring-outline inline-flex items-center justify-center rounded-md bg-white p-2 text-black focus:outline-none focus-visible:ring-2">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2">
                    {mobileNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="hover:text-gray-1 hover:bg-gray-5 block rounded-md px-3 py-2 font-medium text-black transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="my-6 mx-5">
                    <Button
                      className="w-full rounded-lg py-4"
                      theme="orange"
                      type="button"
                      onClick={openModal}
                    >
                      Register here
                    </Button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <FormModal
        title="Register for eBPF Summit"
        isOpen={isOpen}
        closeModal={closeModal}
        hubspotFormId={hubspotFormId}
      />
    </div>
  );
};

SummitHeader.propTypes = {
  navigation: PropTypes.array.isRequired,
  mobileNavigation: PropTypes.array.isRequired,
  hubspotFormId: PropTypes.string.isRequired,
};

export default SummitHeader;
