import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(25, 25, 40, 0.6)',
    zIndex: '30',
  },
};

const CustomModal = ({ className, isOpen, closeModal, title, children }) => (
  <ReactModal
    style={customStyles}
    isOpen={isOpen}
    contentLabel={title || null}
    ariaHideApp={false}
    bodyOpenClassName="overflow-hidden touch-none"
    className={`
      border-gray-2 relative top-1/2 left-1/2 z-50 max-h-[90%] w-[95%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-lg border-[1.5px] bg-white p-0 ${className}`}
    closeTimeoutMS={200}
    shouldCloseOnOverlayClick
    onRequestClose={closeModal}
  >
    {children}
  </ReactModal>
);

CustomModal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

CustomModal.defaultProps = {
  className: null,
};

export default CustomModal;
