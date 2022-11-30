import PropTypes from "prop-types";
import "./style.scss";

const CloseIconDefault = () => {
  return (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
    </g>
  </svg>);
}
function Modal  (
  {
    isOpen,
    isFullPage= false,
    hasCloseIcon= true,
    closeIcon,
    closeModal,
    divider = false,
    modalBackground,
    header,
    headerBackgroundColor,
    footer,
    footerBackgroundColor,
    ...props
  }
)  {

  const displayModal = isOpen ? "" : "is-closed";
  const modalSize = isFullPage ? "is-full-page" : "";
  const borderDivider = divider ? "solid 1px black" : "";
  const headerStyle = header ? { backgroundColor: headerBackgroundColor, borderBottom: borderDivider } : {};
  const footerStyle = footer ? { backgroundColor: footerBackgroundColor, borderTop: borderDivider } : {};

  return (
    <div className={ `modal-wrapper ${ displayModal } ${ modalSize }` }>
      <div className="modal" style={{ backgroundColor: modalBackground }}>
        {hasCloseIcon && <span onClick={closeModal} className="close-button">
          {closeIcon ?? <CloseIconDefault /> }
      </span> }
       <header style={ headerStyle }>{ header }</header>
        { props.children && <div className="modal-main">
          { props.children }
        </div>
        }
       <footer style={ footerStyle }>{ footer }</footer>
      </div>
    </div>
  )
}
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isFullPage: PropTypes.bool,
  hasCloseIcon: PropTypes.bool,
  closeIcon: PropTypes.element,
  closeModal: PropTypes.func,
  divider: PropTypes.bool,
  modalBackground: PropTypes.string,
  header: PropTypes.element,
  headerBackgroundColor: PropTypes.string,
  footer: PropTypes.element,
  footerBackgroundColor: PropTypes.string,
}

export default Modal;