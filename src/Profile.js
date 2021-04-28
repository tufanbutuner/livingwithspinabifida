import Card from 'react-bootstrap/Card'
const axios = require('axios');

function Profile() {
    const username = localStorage.getItem('username');
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    return (
        <div className="profile">
            <Card id="profileCard">
                <Card.Body>
                    <Card.Title className="profileTitle">{firstName} {lastName}</Card.Title>
                    <Card.Subtitle className="profileSubtitle">@{username}</Card.Subtitle>
                    <Card.Text className="profileBio"> User bio goes here.</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
 
export default Profile;