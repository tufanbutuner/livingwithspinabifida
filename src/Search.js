import { useState } from "react";
import axios from 'axios';
const axios = require('axios');

function Search() {

    const [userResults, setUserResults] = useState([]);

    // creating a post request with Axios to our backend
    const submitSearch = () => {
        // sending a request to our /create endpoint, which is route we want to reach
        // we pass the title and body information, (name of prop we are sending: for title send title)
        axios.get('/users', { userResults, setUserResults });
    }

    return (
        <div className="searchBar">
            <input type="text" placeholder="Search..."
                onChange={(e) => {
                        // we are handling the event in the onChange attribute and updating the state
                        // by using e.target.value we are accessing the input field
                        setUserResults(e.target.value);
                }}
            />
            <button id="postSubmit" onClick={submitSearch}>Search</button>
        </div>
    );
}

export default Search;