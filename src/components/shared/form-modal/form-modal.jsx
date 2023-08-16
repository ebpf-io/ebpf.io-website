import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

import HubspotForm from 'components/shared/hubspot-form';
import CloseIcon from 'icons/close.inline.svg';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(25, 25, 40, 0.6)',
    zIndex: '30',
  },
};

const FormModal = ({ className, isOpen, closeModal, title, hubspotFormId }) => (
  <ReactModal
    style={customStyles}
    isOpen={isOpen}
    contentLabel={title || null}
    ariaHideApp={false}
    bodyOpenClassName="overflow-hidden touch-none"
    className={clsx(
      'border-gray-2 scrollbar-hidden z-100 relative left-1/2 top-1/2 max-h-[90%] w-[95%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 overflow-scroll rounded-lg border border-gray-90 bg-white p-8 md:py-5',
      className
    )}
    closeTimeoutMS={200}
    shouldCloseOnOverlayClick
    onRequestClose={closeModal}
  >
    <CloseIcon className="absolute right-5 top-4 h-4 w-4" role="button" onClick={closeModal} />
    <h2 className="heading-6xl text-center font-bold">{title}</h2>
    <HubspotForm className="mt-8 min-h-[400px]" hubspotFormId={hubspotFormId} />
  </ReactModal>
);
FormModal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  hubspotFormId: PropTypes.string.isRequired,
};

FormModal.defaultProps = {
  className: null,
};

export default FormModal;
