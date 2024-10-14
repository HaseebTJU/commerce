import { API_ENDPOINT } from ".";
import React from "react";

export const submitLogin = async (username, password) => {
    try {
        const response = await fetch (`${API_ENDPOINT}/login`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({ username, password })
        }); 

        const data = await response.json(); 

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data; 
    } catch(e) {
        console.error("Error during login:", e); 
        throw e;
    }
    
}