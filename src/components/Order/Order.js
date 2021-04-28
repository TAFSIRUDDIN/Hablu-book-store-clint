import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Order = () => {
    const [user, setUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() =>{
        fetch('https://banana-pudding-50739.herokuapp.com/orders?email='+user.email)
        .then(response => response.json())
        .then(data =>setOrders(data));
    }, [])
    console.log(orders);
    // const { name, email, orderTime, orderedBook } = orders;
    return (


        <Container style={{backgroundColor: 'rgb(245, 158, 142)', height: '655px' }}>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>NO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Book Name</th>
                <th>Price</th>
                <th>Order time</th>
                </tr>
            </thead>
            <tbody>
                    {
                        orders.map(order => 
                            <tr>
                                <td>{orders.indexOf(order)+1}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.orderedBook.name}</td>
                                <td>$ {order.orderedBook.price}</td>
                                {/* <td>{order.orderTime}</td> */}
                                <td>{(new Date(order.orderTime).toDateString('dd/MM/yyyy'))}</td>
                            </tr>
                            )
                    }
            </tbody>
            </Table>

        </Container>

        // <div>
        //     <ul>
        //         {
        //             orders.map(order => <li>Book : {order.orderedBook.name}</li> )
        //         }
        //     </ul>
        // </div>
    );
};

export default Order;