import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectTaskAction, taskMarkAsDoneAction } from "../redux/actions";

const SingleTask = ({ task, done, setModalShow, index }) => {
   const dispatch = useDispatch();

   // marks task as done or not
   const setTaskState = (event, index) => {
      if (event.target.checked || !event.target.checked) {
         dispatch(taskMarkAsDoneAction(index));
      }
   };

   // stores selected task into redux store
   const setModalMessage = (index) => {
      dispatch(selectTaskAction(index));
      setModalShow(true);
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
               onClick={() => setModalMessage(index)}
               type="button"
               className="btn-close"
               aria-label="Close"
            ></button>
         </div>
      </ListGroup.Item>
   );
};

export default SingleTask;
