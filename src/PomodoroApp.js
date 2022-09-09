import React from "react";
import Timer from "./Timer";
import Task from "./Task";
function PomodoroApp() {
  return (
    <div className="pomodoro-app">
      <Timer />
      <Task />
    </div>
  );
}

export default PomodoroApp;
