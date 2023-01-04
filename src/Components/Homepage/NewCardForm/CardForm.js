import axios from 'axios';
import React,{useState} from 'react'

function CardForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    //const [error, setError] = useState(null);
    const SubmitHandler = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title',title);
        formData.append('author',author);
        formData.append('description',description);
        formData.append('image',image);
        const config = {
            mode: 'cors',
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post('http://localhost:3001/api/books',formData,config)
        .then(res => { console.log(res) })
        .catch(err => console.log(err))

        // const response = fetch('http://localhost:3001/api/books', {
        //     mode: 'cors',
        //     method: 'POST',
        //     body: formData,
        //     header:{
        //         "Access-Control-Allow-Origin": "*",
        //         'Content-Type': 'multipart/form-data'
        //     }
        // }
        // ).then(res => res.json()).catch(err => console.log(err))
        //const results = (await response).formData;

        // if(!response.ok) {
        //     setError(results.error)
        // }
        // if(response.ok) {
        //     setTitle('')
        //     setAuthor('')
        //     setDescription('')
        //     setImage(null)
        //     setError(null)
        //     console.log("Book added successfully")
        // }
    }

  return ( 
    <>
    <form onSubmit={SubmitHandler}>
        <h3>Add a new Book</h3>
        <div className="form-outline mb-3">
                <label className="form-label" htmlFor="title">Title</label>
                <input 
                    type="text" 
                    id="title" 
                    className="form-control" 
                    onChange={(e) => {setTitle(e.target.value)}}
                    value={title}
                    required
                    />
        </div>
        <div className="form-outline mb-3">
                <label className="form-label" htmlFor="author">Author</label>
                <input 
                    type="text" 
                    id="author" 
                    className="form-control"
                    onChange={(e) => {setAuthor(e.target.value)}}
                    value={author}
                    required
                    />
        </div>
        <div className="form-outline mb-3">
                <label className="form-label" htmlFor="description">Description</label>
                <textarea 
                    className="form-control" 
                    type="textarea" 
                    id="description" 
                    rows={5} cols={50}
                    onChange={(e) => {setDescription(e.target.value)}}
                    value={description}
                    required
                    />
        </div>
        <div className="form-outline mb-3">
                <label className="form-label" htmlFor="author">Book Cover</label>
                <input 
                    type="file" 
                    id="author" 
                    className="form-control" 
                    onChange={(e) => {setImage(e.target.files[0])}}
                    name='image'
                    reaquired
                />
        </div>

        <button className="btn btn-primary buttonClass" type="submit">Add Book</button>
    </form>
    </>
  )
}
export default CardForm