const axios = require('axios');

function Profile() {
    const username = localStorage.getItem('username');
    return (
        <div className="profile">
            <h2>Welcome back {username}</h2>
        </div>
    );
}
 
export default Profile;