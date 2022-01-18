import { FormEvent, useState } from "react";
import Post from "../model/Post";
import "./PostForm.css"



  

interface Props{
    onSubmit: (post: Post) => void
    onClose: () => void 

}

function PostForm({onSubmit, onClose}:Props){
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("")


    function handleFormSubmit(e:FormEvent){
        e.preventDefault();

        const newForm: Post ={
            title: title,
            thought: thought
        }

        onSubmit(newForm)
    }

    return(
        <div className="PostForm" onSubmit={handleFormSubmit}>
            <form>
                <div className="form">
                <p>
                <label>Title</label>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" onClick={onClose}>
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                 <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
                <br></br>
                <input type="text" value={title} onChange={e=> setTitle(e.target.value)} required/>
            </p>
            <p>
                <label>Thought</label>
                <br></br>
                <input type="text" value={thought} onChange={e=> setThought(e.target.value)} required/>
            </p>
                </div>

            <p>
                <button type="submit">Add Post</button>
            </p>



            </form>
        </div>
    )



}

export default PostForm
