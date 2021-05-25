import { useState } from 'react';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Post from './Post';

const Comment = (props) => 
{
    // controlling the modal state
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // we use state to update the elements on the page
    const userId = localStorage.getItem('userId');
    const postId = props.postId;
    const [content, setContent] = useState("");

    // creating a post request with Axios to our backend
    const submitPost = () => {
        // sending a request to our /create endpoint, which is route we want to reach
        // we pass the title and body information, (name of prop we are sending: for userId send userId)
        Axios.post('http://localhost:5000/comment', {postId: postId, userId: userId, content: content})
    }

    return (
        <>
        <div
          className="d-flex align-items-center justify-content-center">
            <Button variant="primary" onClick={handleShow}>Create Comment</Button>
        </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Comment</Modal.Title>
        </Modal.Header>
            <Modal.Body>
              <p class="comment-text">Leave a comment on this post</p>
                <input onChange={(e) => {setContent(e.target.value);}}/>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" id="postSubmit" onClick={submitPost}>Comment</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Comment;