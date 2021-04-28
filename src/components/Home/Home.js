import React from 'react';
import { useContext } from 'react';
import { CardColumns, CardDeck, Container, Spinner } from 'react-bootstrap';
import {BookContext} from '../../App';
import Books from '../Books/Books';
import Carosoul from '../Carosoul/Carosoul';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
    const [ allBook, setAllBook ] = useContext(BookContext);
    // console.log(allBook);
    return (
        <Container style={{backgroundColor: 'rgb(245, 158, 142)'}}>
            <Carosoul/>
            {allBook[0] ?
            <>
                
                <CardColumns>
                    {
                        allBook.map(book => <Books key={book._id} book={book}></Books>)
                    }
                </CardColumns>
            
                <Footer/>
            </>
            :
            <Spinner style={{margin: '0 auto', backgroundColor: 'rgb(245, 158, 142)'}} animation="border" role="status">
                <span className="sr-only"></span>
            </Spinner>
            }

        </Container>
    );
};

export default Home;