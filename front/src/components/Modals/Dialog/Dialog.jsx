import Proptypes from "prop-types";
import "./Dialog.css";

const Dialog = ({ isDialogShow, setIsDialogShow }) => {
  const handleCloseDialog = (event) => {
    const checked = event.target.checked;
    localStorage.setItem("dialog", JSON.stringify(!checked));
  };
  return (
    <div className={`modal-dialog ${isDialogShow ? "show" : ""}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={() => setIsDialogShow(false)}>
          <i className="bi bi-x"></i>
        </button>
        <div className="modal-image">
          <img src="/img/modal-dialog.jpg" alt="" />
        </div>
        <div className="popup-wrapper">
          <div className="popup-content">
            <div className="popup-title">
              <h3>BÜLTEN</h3>
            </div>
            <p className="popup-text">
            Bültenimize kaydolun ve başka herhangi bir yerde bulacağınız özel fırsatları doğrudan gelen kutunuza alın!
            </p>
            <form className="popup-form">
              <input type="text" placeholder="Enter Email Address Here" />
              <button className="btn btn-primary">ABONE OL</button>
              <label>
                <input type="checkbox" onChange={handleCloseDialog} />
                <span>Bunu tekrar gösterme</span>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal-overlay"
        onClick={() => setIsDialogShow(false)}
      ></div>
    </div>
  );
};

export default Dialog;
Dialog.propTypes = {
  isDialogShow: Proptypes.bool,
  setIsDialogShow: Proptypes.func,
};
