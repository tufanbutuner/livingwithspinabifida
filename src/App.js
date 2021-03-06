import Navbar from './Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
