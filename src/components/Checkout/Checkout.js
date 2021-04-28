import React, { useContext } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { BookContext, UserContext } from '../../App';

const Checkout = () => {
    const [user, setUser] = useContext(UserContext);
    const [ allBook, setAllBook ] = useContext(BookContext);
    const { productId } = useParams();
    console.log(user);


    let selectedProduct = allBook.find(product => product._id ==  productId);
    console.log(selectedProduct);
    const {name, price } = selectedProduct;


    const handleOrder= () => {
        const newOrder = {...user, orderedBook: selectedProduct, orderTime: new Date()};
        fetch('https://banana-pudding-50739.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <Container style={{backgroundColor: 'rgb(245, 158, 142)', height: '655px' }}>
            <h1>Checkout</h1>
            <Table style={{backgroundColor: 'white'}}striped hover>
                <thead>
                    <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{name}</td>
                    <td>1</td>
                    <td>$ {price}</td>
                    </tr>
                    <tr>
                    <td colSpan="2">Total</td>
                    <td>$ {price}</td>
                    </tr>
                </tbody>
            </Table>
            <Button style={{float:"right"}} onClick={handleOrder} variant="success">Place Order</Button>

        </Container>





        

    );
};

export default Checkout;