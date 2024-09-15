import {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Card, Row, Col, Form, ListGroup, ListGroupItem } from "react-bootstrap"


function App() {
  const [todos, setTodos]=useState([]);
  const [title, setTitle]=useState('')


  const createTodo=()=>{

     const newTodo={id:crypto.randomUUID(),title,completed:false}
     setTodos([...todos, newTodo])
  }
  const handleSubmit=(event)=> {
    event.preventDefault();
    createTodo();
    setTitle('');
  }

 const handleChange=(event)=> {
  setTitle(event.target.value)
 }


 const deleteTodo=(event)=> {
     let id=event.target.id;
     const updatedTodo=todos.filter(todo=> {
      return todo.id!==id;
     })
     setTodos(updatedTodo);
 }

 const updateTodo=({id , title })=> {
  const updatedTodo=todos.map(todo=> {
    if(todo.id===id) {
      return todo;
    }
   return todo;
  })
  setTodos(updatedTodo);
 }
  return (
  <Row className="justify-content-center mt-5 pt-5">
      <Col md className="col-md-4">
       <Card className="text-bg-danger"> 
        <Card.Body>
          <Card.Title>
           Todo App
          </Card.Title>
          <Card.Text>
             Streamline Your Day, the React Way!
          </Card.Text>
          <hr/>
          <ListGroup>
            { todos.map(todo=> {
                      return ( 
                      <ListGroupItem
                      className="text-bg-secondary mb-1 py-3 w-100"
                      >{todo.title}  
                      
                      {/* <i className="bi bi-pencil float-end ms-2"
                       onClick={updateTodo}
                       id={todo.id}
                       title={todo.title}
                       
                      />    */}
                      <i className="bi bi-trash float-end" 
                      onClick={deleteTodo}
                      id={todo.id}
                      />        
                      </ListGroupItem>
                      )
                  })
            }
          </ListGroup>
        
           <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control 
               className="w-100 py-2"
               type="text"
               value={title}
               onChange={handleChange}
               placeholder="enter a todo"
              />
            </Form.Group>
           </Form>
        </Card.Body>
       </Card>
       </Col>
    </Row>
  );
}

export default App;
