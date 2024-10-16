import React, {useState} from "react"; 
import { submitRegistration } from "../api/registration";

export default function Registration() {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        submitRegistration(username, password);
        console.log("Username", username); 
        console.log("Password", password);
    }

    return (
        <main>
            <h2>
                Welcome to the Registration page!
            </h2>

            <div>
                <form onSubmit={handleSubmit}>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/> 

                    <br></br>

                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> 

                    <br></br>
        
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    )
}