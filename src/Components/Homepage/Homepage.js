import React, {useEffect,useContext, useState} from 'react';
import './Homepage.css';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Cards from './Cards/Card'
import NewCardForm from './NewCardForm/CardForm'
//import { useBookContext } from '../../useBook/useBookContext';
function Homepage() {
 //const {books,dispatch} = useBookContext();
 const [books,dispatch] = useState([]);
    useEffect(() => {
    
        axios.get('http://localhost:3001/api/books',{mode: 'cors'})
        .then((response) => dispatch(response.data))
        .catch(err => {   
            console.log("error from home page get API"+err)
        })
    },[])
  return (
    <>
    <NavBar/>
    <div className='row'>
    <div className='col-9'>
        <div className='container row'>
            <div className='container row'>
                { books && books.map((book) => {
                    const base64String = btoa(
                    String.fromCharCode(...new Uint8Array(book.image.data.data))
                );
                    return(
                            <Cards key={book._id} book={book} base64String={base64String}/>
                    )
                })}
            </div>
        </div>
    </div>
    <div className='col form'>
        <NewCardForm/>
    </div>
    </div>
    </>

  )
}

export default Homepage