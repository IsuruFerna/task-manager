import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { taskMarkAsDoneAction } from "../redux/actions";

const SingleTask = ({ task, done, setModalShow, index }) => {
   const dispatch = useDispatch();
   const setTaskState = (event, index) => {
      console.log("state changed");
      if (event.target.checked || !event.target.checked) {
         dispatch(taskMarkAsDoneAction(index));
      }
   };

   return (
      <ListGroup.Item>
         <div className="d-flex justify-content-between">
            <div className="d-flex">
               <input
                  onChange={(event) => setTaskState(event, index)}
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
