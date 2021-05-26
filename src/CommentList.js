import axios from 'axios';
import { useEffect, useState } from 'react';

const CommentList = () => {

    // creating a state for to represent our comments list
    const [commentList, setCommentList] = useState([]);

    // Every time we reload the page, we make an Axios get request which changes when info in the db changes
    useEffect(() => {
        axios.get("/getComments").then((data) => {
            setCommentList(data.data);
        });
    }, []);
    // we add an empty array so the useEffect only makes the request once rather than infinitely

    return (
        <>
        <div className="commentList">
            <h1 className="commentsHeader"> All comments</h1>
            {commentList.map((comment) => {
                return (
                    <div className="comment">
                        <h3 className="commentUsername">{comment.username}</h3>
                        <p className="commentContent">{comment.commentContent}</p>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default CommentList;