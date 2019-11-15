import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

import { deleteLog, setCurrent } from "../../actions/logActions";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: "Log successfully deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={()=>setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          hi
          <span className="black-text">ID # {log.id} </span>
          last used by <span className="black-text">{log.tech}</span>
          on <Moment format="MMM DD YYYY, h:mm:ss a ">{log.date}</Moment>
        </span>
        <a className="secondary-content" href="#!" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
