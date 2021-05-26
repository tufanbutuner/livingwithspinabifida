import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function UserList() {
    
    let { userId } = useParams();
    let history = useHistory();
    const [userList, setUserList] = useState([]);

    // Every time we reload the page, we make an Axios get request which changes when info in the db changes
    useEffect(() => {
        Axios.get("https://lwsb-v6aoj.ondigitalocean.app/users").then((data) => {
            setUserList(data.data);
        });
    }, []);

    return (
        <div className="users">
                <h1 className="userListHeader">List of users</h1>
                {userList.map((users) => {
                    return (
                        <div className="userList" onClick={() => {history.push(`/users/${users.userId}`)}}>
                            <p className="fullName">{users.firstName} {users.lastName}</p>
                            <h1 className="username">@{users.username}</h1>
                            <button>Follow</button>
                        </div>
                )
            })}
        </div>
    )
}

export default UserList;