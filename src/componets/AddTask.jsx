import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../redux/actions";

const AddTask = (props) => {
   const dispatch = useDispatch();
   const [task, setTask] = useState({
      id: 1,
      task: "",
      piority: 1,
      done: false,
   });

   const handleChange = (e) => {
      setTask({
         ...task,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(task);
      dispatch(addTaskAction(task));
      props.onHide();
      // props.setModalShowAddTask(false);

      // resets the values of the input
      setTask({
         id: 1,
         task: "",
         piority: 1,
         done: false,
      });
   };

   return (
      <Modal
         {...props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter">
                  Add Task
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
               >
                  <Form.Label>Task title</Form.Label>
                  <Form.Control
                     name="task"
                     type="text"
                     placeholder="Insert the task"
                     value={task.task}
                     onChange={handleChange}
                  />
               </Form.Group>
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={props.onHide}>Close</Button>
               <Button type="submit" variant="success">
                  Save
               </Button>
            </Modal.Footer>
         </Form>
      </Modal>
   );
};

export default AddTask;
