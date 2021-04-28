import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <Card style={{marginBottom: '30px', marginTop: '70px'}} className="text-center">
        <Card.Body>
            <Card.Title>The more You read ,The more you can Learn</Card.Title>
            <Card.Text>
                To get the best offer stay with us
            </Card.Text>
            <Link to="/login"><Button variant="primary"> <FontAwesomeIcon icon={faSignInAlt}  /> Create Account</Button></Link>
        </Card.Body>
        </Card>
    );
};

export default Footer;