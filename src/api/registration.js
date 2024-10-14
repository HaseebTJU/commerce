import { API_ENDPOINT } from ".";
import React from "react";

export const submitRegistration = async (username, password) => {
    try {
        const response = await fetch (`${API_ENDPOINT}/registration`, {
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
        console.error("Error during registration:", e); 
        throw e;
    }
    
}