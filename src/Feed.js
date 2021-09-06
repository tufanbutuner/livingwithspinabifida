import { useEffect, useState } from "react";

import Comment from "./Comment";
import CommentList from "./CommentList";
import axios from "axios";

const Feed = () => {
  // creating a state for to represent our posts list
  const [list, setList] = useState([]);

  // Every time we reload the page, we make an Axios get request which changes when info in the db changes
  useEffect(() => {
    axios.get("/getPosts").then((data) => {
      setList(data.data);
    });
  }, []);
  // we add an empty array so the useEffect only makes the request once rather than infinitely

  return (
    // mapping out all posts onto the feed
    <div className="feed">
      <h1 className="allPosts"> All posts</h1>
      {list.map((posts) => {
        return (
          <>
            <div className="post">
              <h1 className="postUsername">{posts.username}</h1>
              <h2 className="postTitle">{posts.postTitle}</h2>
              <p className="postId">Post ID: {posts.postId}</p>
              <p className="postContent">{posts.postContent}</p>
              <p className="postDate">{posts.dateCreated}</p>
              <Comment postId={posts.postId} />
            </div>
            <div>
              <CommentList />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Feed;
