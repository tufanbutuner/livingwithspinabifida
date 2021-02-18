function Register() {
    return (
        <div className="register">
            <h2>Register</h2>
            <form>
                <input type="text" placeholder="First name" required></input>
                <input type="text" placeholder="Surname" required></input>
                <input type="text" placeholder="Username" required></input>
                <input type="email" placeholder="Email" required></input>
                <input type="password" placeholder="Password" required></input>
                <button type="submit" class="register-btn">Register</button>
            </form>
        </div>
    );
}
 
export default Register;