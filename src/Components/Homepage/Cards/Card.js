import React from 'react'
import './Card.css'
function Card({book,base64String}) {
  return (
    <>
            <div className='col-4'>
                <div className="cardk" key={book._id}>
                    <ul className="ul">
                        <li>
                            <i className="fas fa-pen"></i>
                        </li>
                        <li>
                            <i className="fa fa-trash"></i>
                        </li>
                    </ul>
                    <img className='fill' src={`data:image/jpg;base64,${base64String}`} alt=""/> 
                    <div className="con-text">
                        <h3 >
                            {book.title}
                        </h3>
                        <h6>{book.author}</h6>
                        <p>
                            {book.description}
                            <button>
                                See more
                            </button>
                        </p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Card