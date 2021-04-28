import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Col, Container, ListGroup, Nav, Row, Tab } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { BookContext } from '../../App';
import './Admin.css';

const Admin = () => {
    const [ allBook, setAllBook ] = useContext(BookContext);
    // console.log(allBook);
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState();
    const onSubmit = data => {
        const bookData = {
            name: data.name,
            imageURL: imageURL,
            authorName: data.authorname,
            price: data.price
        }
        // console.log(bookData);
        const url = `https://banana-pudding-50739.herokuapp.com/addBook`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(response =>console.log('server side responsed',response))
    };

    const handleImageUpload = event => {

        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '2e1f1562ee096c0eade1b0cec0b9e7f8');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const handleDelet= (_id) => {
        console.log(_id)
        fetch(`https://banana-pudding-50739.herokuapp.com/delete/${_id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result =>{
            console.log('deletted')
        })
    }
    // console.log(imageURL)
    return (
    <Container style={{backgroundColor: 'rgb(245, 158, 142)', height: '655px' }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="first">Manage book</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">Add book</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="third">More</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active>
                            Cras justo odio
                        </ListGroup.Item>
                        {
                            allBook.map(book => <ListGroup.Item className="d-flex justify-content-between" as="li">{book.name} <Button onClick={() =>handleDelet(book._id)} variant="danger">Delete</Button></ListGroup.Item> )
                        }
                    </ListGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <div>
                <form className="form-layout" onSubmit={handleSubmit(onSubmit)}>
                    <input className="input-layout" name="name" defaultValue="new book name" ref={register} />

                    <input className="input-layout" name="authorname" defaultValue="Jhonkor mahbub" ref={register} />
                    <br/>
                    <br/>
                    <input className="input-layout" name="price" defaultValue="new book price" ref={register} />

                    <input className="input-layout-file" name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <br/>
                    <br/>
                    <input className="submit-layout" type="submit" />
                </form>
                </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <p>Tapu</p>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    </Container>
    );
};

export default Admin;