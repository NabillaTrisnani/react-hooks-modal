import React, { useState } from 'react';

export default function ScrollableModal() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((current) => !current);
  };

  return (
    <div>
      <button className="btn btn-toggle btn-primary" onClick={handleShow}>
        Scrollable Modal
      </button>
      <div
        className={`modal-container ${show === true ? 'show' : 'hide'}`}
        onClick={handleShow}
      ></div>
      <div className={`modal-dialog ${show === true ? 'show' : 'hide'}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>Scrollable Modal</h3>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
              nibh scelerisque, volutpat ligula quis, luctus risus. Maecenas
              tempus, magna at aliquam fringilla, odio nisi rutrum ligula, at
              pretium ligula felis mollis arcu. Cras hendrerit lacus eget lorem
              suscipit tincidunt. Praesent rutrum nunc vitae massa eleifend, nec
              varius leo porta. Pellentesque mollis placerat felis sed tempus.
              Cras lorem dui, dapibus at diam sit amet, vehicula ullamcorper mi.
              Cras non est tempor, consectetur massa vitae, tincidunt arcu.
              Fusce nec tortor id augue suscipit condimentum in non massa. Donec
              in turpis dui. Fusce nec egestas lacus. Integer nulla massa,
              placerat et imperdiet eu, elementum et neque. Morbi quis dui
              scelerisque, pellentesque eros at, convallis dui. Ut erat turpis,
              euismod sit amet leo volutpat, venenatis euismod felis. Vestibulum
              ac magna interdum, viverra nisi a, consectetur turpis. In hac
              habitasse platea dictumst.
            </p>
            <p>
              Morbi sagittis vulputate dui, quis ornare mauris molestie vitae.
              Maecenas faucibus leo ullamcorper gravida molestie. Etiam eget
              elit vel risus efficitur euismod posuere sit amet augue.
              Vestibulum hendrerit, orci a efficitur elementum, ipsum augue
              interdum mauris, in dictum dui tortor et orci. Nunc arcu turpis,
              aliquet at velit a, venenatis varius dui. Morbi ullamcorper est at
              purus tempus condimentum. Cras eu tristique tellus. Mauris et
              justo enim. In hac habitasse platea dictumst.
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
