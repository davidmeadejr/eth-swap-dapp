import React from "react";
import "./claim-modal.component.scss";

const ClaimModal = () => {
  return (
    <div className="claim-modal-container">
      <div className="claim-info-list">
        <ul className="rain">
          <li className="claim-left-side">RAIN</li>
          <button disabled className="claim-right-side">
            CLAIMED
          </button>
        </ul>
        <div>
          <ul className="thunder">
            <li className="claim-left-side">THUNDER</li>
            <button disabled className="claim-right-side">
              CLAIMED
            </button>
          </ul>
        </div>
        <div>
          <ul className="frost">
            <li className="claim-left-side">FROST</li>
            <button disabled className="claim-right-side">
              CLAIMED
            </button>
          </ul>
        </div>
        <div>
          <ul className="frost">
            <li className="claim-left-side">SLEET</li>
            <button disabled className="claim-right-side">
              CLAIMED
            </button>
          </ul>
        </div>
        <div>
          <ul className="frost">
            <li className="claim-left-side">VAPOUR</li>
            <button disabled className="claim-right-side">
              CLAIMED
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClaimModal;
