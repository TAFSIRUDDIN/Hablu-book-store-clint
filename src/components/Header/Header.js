import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <Container style={{backgroundColor: 'rgb(245, 158, 142)', paddingTop: '10px', paddingBottom: '30px'}}>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><Link to="/">HABLU BOOK STORE</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
                <Nav.Link><Link to="/order">Order</Link></Nav.Link>
                <Nav.Link><Link to="/checkout/:productId"> <FontAwesomeIcon icon={faShoppingCart} /> Checkout</Link></Nav.Link>
                </Nav>
                <Form inline>
                {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                <h4>{user.name}</h4> <img style={{width: '10%', borderRadius: '50px', margin: '0 8px'}} src={user.photoURL} alt=""/>
                <Link to="/login"><Button variant="outline-success"> <FontAwesomeIcon icon={faSignInAlt} /> Login</Button></Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </Container>
    );
};

export default Header;