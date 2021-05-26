import { useState } from 'react';
const axios = require('axios');

const CreatePost = () => {

    // we use state to update the elements on the page
    const userId = localStorage.getItem('userId');
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // creating a post request with Axios to our backend
    const submitPost = () => {
        // sending a request to our /create endpoint, which is route we want to reach
        // we pass the title and body information, (name of prop we are sending: for title send title)
        if (title && content !== "") {
            axios.post('/create', { userId: userId, title: title, content: content });
            alert('You have successfully made a post!');
        } else {
            alert("Please add text to the title and body!")
        }
    }

    return (
        <div className="createPost">
            <div className="uploadPost">
                <label>Title</label>
                <input type="text"
                    onChange={(e) => {
                        // we are handling the event in the onChange attribute and updating the state
                        // by using e.target.value we are accessing the input field
                        setTitle(e.target.value);
                    }}
                />
                <label>Body</label>
                <textarea
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                />
                <button id="postSubmit" onClick={submitPost}>Create Post</button>
            </div>
        </div>
    );
 }

export default CreatePost;