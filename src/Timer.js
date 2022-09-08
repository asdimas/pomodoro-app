import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Timer() {
  return (
    <section className="timer">
      <div className="outer-circle">
        <div className="inner-circle">
          <div className="content-circle">
            <span>25:00</span>
          </div>
        </div>
      </div>
      <div className="action-timer">
        <button className="subtraction">
          <FontAwesomeIcon icon={faMinus} className="minus" />
        </button>
        <button className="addition">
          <FontAwesomeIcon icon={faPlus} className="plus" />
        </button>
        <button className="start">
          <FontAwesomeIcon icon={faPlay} className="play" />
        </button>
      </div>
    </section>
  );
}

export default Timer;
