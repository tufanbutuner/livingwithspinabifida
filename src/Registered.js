import { useHistory } from 'react-router-dom';

function Registered() {

    const history = useHistory();

    const submitHandler = () => {
        history.push('/login');
    }

    return (
        <div className="home">
            <h1>You are now registered, click below to log in!</h1>
            <button onClick={submitHandler}>Log in</button>
        </div>
    );
}

export default Registered;