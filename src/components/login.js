import React, {useState} from "react"; 
import { submitLogin } from "../api/login";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        try {

            const response = await submitLogin(username, password);
            console.log(response);
            
            //code to redirect to main page;
            navigate("/main"); 


        } catch(error) {
            console.error("Error submitting the form: ", error)
        }
        
        
    }

    return (
        <main>
            <h2>
                Welcome to the login page!
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