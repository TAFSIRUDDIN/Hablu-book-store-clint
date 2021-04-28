import React from 'react';
import { useContext } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { BookContext } from '../../App';

const Carosoul = () => {
    const [ allBook, setAllBook ] = useContext(BookContext);
console.log(allBook)
    return (
        <Container style={{backgroundColor: 'rgb(245, 158, 142)'}}>
            <Carousel fade style={{backgroundColor: "gray", marginBottom: "20px"}}>
                {
                    allBook.map(book =>                 
                    <Carousel.Item className="d-flex justify-content-center">
                        <img
                        className="d-block w-10 h-100"
                        src={book.imageURL}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{book.name}</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                }
            </Carousel>
        </Container>
    );
};

export default Carosoul;