import React, { useState } from 'react';

export default function Modal() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((current) => !current);
  };

  return (
    <div>
      <button className="btn btn-toggle btn-primary" onClick={handleShow}>
        Default Modal
      </button>
      <div
        className={`modal-container ${show === true ? 'show' : 'hide'}`}
        onClick={handleShow}
      ></div>
      <div className={`modal-dialog ${show === true ? 'show' : 'hide'}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>Default Modal</h3>
            <button className="modal-close" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
                />
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              culpa, inventore alias ab atque similique quod ea reprehenderit.
            </p>
          </div>
          <div className="modal-footer">
            <button className="btn" onClick={handleShow}>
              Close
            </button>
            <button className="btn btn-primary">Okay</button>
          </div>
        </div>
      </div>
    </div>
  );
}
