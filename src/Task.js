import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Task() {
  return (
    <div className="task">
      <div className="action-table">
        <button className="download-logs">
          <FontAwesomeIcon icon={faDownload} className="download-icon" />
          <span>Download logs</span>
        </button>
        <button className="delete-session">
          <FontAwesomeIcon icon={faTrashCan} className="delete-icon" />
          <span>Delete session</span>
        </button>
      </div>
      <table className="table table-striped border">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Started at</th>
            <th scope="col">Duration</th>
            <th scope="col">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr className="height-value">
            <td>1</td>
            <td>16:27:45, Sep 1, Thu</td>
            <td>
              <span className="bold-td">00:07</span>/25 min.
            </td>
            <td></td>
          </tr>
          <tr className="height-value">
            <td>2</td>
            <td>16:27:45, Sep 1, Thu</td>
            <td>
              <span className="bold-td">00:07</span>/25 min.
            </td>
            <td>makan nasi ayam</td>
          </tr>
          <tr className="tr-height"></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Task;
