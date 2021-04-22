import Jumbotron from 'react-bootstrap/Jumbotron'

function Landing() {
    return (
        <div className="landing">
            <Jumbotron fluid>
                <h1>Welcome!</h1>
                <p>Login or sign up to get started!</p>
            </Jumbotron>
        </div>
    );
}

export default Landing;