import { faDolly } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Books = (props) => {
    
    // console.log(props.book);
    const {imageURL, name, authorName, price, _id} = props.book;
    return (
        <Card>
            <Card.Img style={{width:'50%', margin: '5% 25%'}} src={imageURL} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {authorName}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <Card.Title>$ {price}</Card.Title>
                <Link to={ `/checkout/${_id}`}><Button variant="outline-success"> <FontAwesomeIcon icon={faDolly} /> Buy Now</Button></Link>
            </Card.Footer>
        </Card>
    );
};

export default Books;