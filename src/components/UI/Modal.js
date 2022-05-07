import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content + ' break-all'}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      <Backdrop onClose={props.onClose}></Backdrop>
      <ModalOverlay onClick={props.onClose}>{props.children}</ModalOverlay>
    </>
  );
};

export default Modal;
