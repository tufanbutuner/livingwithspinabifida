function Dashboard() {
    
    var username = localStorage.getItem('username')

    return (
        
        <div className="dashboard">
            <h2>Welcome back to the dashboard, {username}</h2>
        </div>
    );
}

export default Dashboard;