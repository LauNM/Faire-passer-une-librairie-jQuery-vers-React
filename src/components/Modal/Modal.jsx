import PropTypes from "prop-types";
import { RiCloseFill } from "react-icons/ri";
import "./style.scss";

function Modal  (
  {
    isOpen,
    isFullPage,
    closeIcon,
    closeModal,
    divider,
    modalBackground,
    ...props
  }
)  {
  const displayModal = isOpen ? "" : "is-closed";
  const modalSize = isFullPage ? "is-full-page" : "";
  const borderDivider = divider ? "solid 1px black" : "";
  const headerStyle = props.header ? { backgroundColor: props.headerBackgroundColor, borderBottom: borderDivider } : {};
  const footerStyle = props.footer ? { backgroundColor: props.footerBackgroundColor, borderTop: borderDivider } : {};

  return (
    <div className={ `modal-wrapper ${ displayModal } ${ modalSize }` }>
      <div className="modal" style={{ backgroundColor: modalBackground }}>
        {closeIcon && <span onClick={closeModal} className="close-button">
        <RiCloseFill/>
      </span> }
       <header style={ headerStyle }>{ props.header }</header>
        { props.content && <div className="modal-main">
          { props.content }
        </div>
        }
       <footer style={ footerStyle }>{ props.footer }</footer>
      </div>
    </div>
  )
}
Modal.defaultProps = {
  isFullPage: false,
  closeIcon: true,
  divider: false,
}
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isFullPage: PropTypes.bool,
  closeIcon: PropTypes.bool
}

export default Modal;