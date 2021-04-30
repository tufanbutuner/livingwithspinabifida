import Axios from 'axios';
import { useEffect, useState } from 'react';

function Feed() {

    // creating a state for to represent our posts list
    const [list, setList] = useState([]);

    // Every time we reload the page, we make an Axios get request which changes when info in the db changes
    useEffect(() => {
        Axios.get("http://localhost:5000/getPosts").then((data) => {
            setList(data.data);
        });
    }, []);
    // we add an empty array so the useEffect only makes the request once rather than infinitely

    return (

        <div className="feed">
            <h1 className="allPosts"> All posts</h1>
            {list.map((posts) => {
                return (<div className="post">
                    <h1 className="postUsername">@{posts.username}</h1>
                    <h2 className="postTitle">{posts.postTitle}</h2>
                    <p className="postContent">{posts.postContent}</p>
                    <p className="postDate">{posts.dateCreated}</p>
                </div>
                )
            })}
        </div>
    )
}

export default Feed;