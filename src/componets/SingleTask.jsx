import React from "react";
import { ListGroup } from "react-bootstrap";

const SingleTask = ({ task, done, setModalShow }) => {
   return (
      <ListGroup.Item>
         <div className="d-flex justify-content-between">
            <div className="d-flex">
               <input
                  className="form-check-input me-3"
                  type="checkbox"
                  id="checkboxNoLabel"
                  value=""
                  aria-label="..."
               />

               <div
                  className={
                     done === true ? "text-decoration-line-through" : ""
                  }
               >
                  {task}
               </div>
            </div>
            <button
               onClick={() => setModalShow(true)}
               type="button"
               className="btn-close"
               aria-label="Close"
            ></button>
         </div>
      </ListGroup.Item>
   );
};

export default SingleTask;
