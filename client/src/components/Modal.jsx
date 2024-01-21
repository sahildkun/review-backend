import React from "react";
import LoginForm from "./LoginForm";

const Modal = () => {
  return (
    <div>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
            {<LoginForm/>}
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default Modal;
