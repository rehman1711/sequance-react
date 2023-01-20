import React, { useEffect, useRef } from "react";

export default function CustomPopup() {
  const visited = false;
  const popUpButtonRef = useRef();
  useEffect(() => {
    popUpButtonRef.current.click();
  }, [visited]);

  return (
    <>
      <button
        type="button"
        ref={popUpButtonRef} 
        className="btn btn-primary"
        id="popup-button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        style={{ display: "none" }}
      >
        Launch Popup
      </button>
adsfasdfsdafsdafds
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Sequance Game
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
