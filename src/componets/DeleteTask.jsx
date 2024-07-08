import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskAction } from "../redux/actions";

const DeleteTask = (props) => {
   const dispatch = useDispatch();
   const selectedTask = useSelector((state) => state.tasks.selected);
   console.log("selected task ", selectedTask);

   const handleDeleteTask = () => {
      if (selectedTask !== null) {
         dispatch(deleteTaskAction(selectedTask.task));
         props.onHide();
      }
   };

   return (
      <Modal
         {...props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Remove task?
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>{selectedTask && <p>{selectedTask.task}</p>}</Modal.Body>
         <Modal.Footer>
            <Button onClick={props.onHide}>Cancel</Button>
            <Button variant="danger" onClick={handleDeleteTask}>
               Delete
            </Button>
         </Modal.Footer>
      </Modal>
   );
};

export default DeleteTask;
