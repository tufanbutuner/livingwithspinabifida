import { useEffect, useState } from 'react';
import Axios from 'axios';

export default function CreatePost() {

    // we use state to update the elements on the page
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // creating a post request with Axios to our backend
    const submitPost = () => {
        // sending a request to our /create endpoint, which is route we want to reach
        // we pass the title and body information, (name of prop we are sending: for title send title)
        Axios.post('http://localhost:5000/create', {title: title, content: content})
    }

    return (
        <div className="post">
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