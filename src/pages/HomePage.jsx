import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import SingleTask from "../componets/SingleTask";
import DeleteTask from "../componets/DeleteTask";
import Button from "react-bootstrap/Button";
import AddTask from "../componets/AddTask";
import { PlusLg } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const HomePage = () => {
   const [modalShow, setModalShow] = useState(false);
   const [modalShowAddTask, setModalShowAddTask] = useState(false);

   const tasks = useSelector((state) => state.tasks.taskList);

   console.log("this is taks ", tasks);

   return (
      <>
         <DeleteTask show={modalShow} onHide={() => setModalShow(false)} />

         {/* Add task button */}
         <Button
            className="position-absolute bottom-0 end-0 m-4"
            variant="primary"
            onClick={() => setModalShowAddTask(true)}
         >
            <div className="d-flex justify-content-around align-items-center">
               <PlusLg className="me-2 fs-4" />
               Add task
            </div>
         </Button>
         <AddTask
            setModalShowAddTask={setModalShowAddTask}
            show={modalShowAddTask}
            onHide={() => setModalShowAddTask(false)}
         />

         <Container fluid>
            <Row className="justify-content-center mx-3 my-5">
               <Col>
                  <Card>
                     <ListGroup variant="flush">
                        {tasks.map((elem, i) => (
                           <SingleTask
                              key={i}
                              task={elem.task}
                              done={elem.done}
                              setModalShow={setModalShow}
                              index={i}
                           />
                        ))}
                     </ListGroup>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default HomePage;
