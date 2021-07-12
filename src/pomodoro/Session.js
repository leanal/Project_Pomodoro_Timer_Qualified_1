import React from "react";
import { secondsToDuration } from "../utils/duration";
import SessionMinutes from "./SessionMinutes";

export default function Session({ session, focusDuration, breakDuration, isTimerRunning }) {

  const paused = !isTimerRunning ? <h3>PAUSED</h3> : null;

  const duration = session?.label === "Focusing" ? focusDuration : breakDuration;

  const progress =  100 - ((session?.timeRemaining/(duration * 60)) * 100);

  if (session !== null) {
    return (
      <>
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session?.label} for{" "}
              <SessionMinutes session={session} focusDuration={focusDuration} breakDuration={breakDuration} />
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
            {paused}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progress} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${progress}%` }} // TODO: Increase width % as elapsed time increases
              />
              
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
}