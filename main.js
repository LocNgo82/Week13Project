import React from "react";
import Nav_Bar from "./Nav_Bar";
import Login_Form from "./Login_Form";

// main script to set up the navigation bar and login form using react, bootstrap, and JSX
export default class Main extends React.Component {
    render() {
        return (
            
            <div className="container">                
                <Nav_Bar />
                
                <div className="p-5 text-center bg-light">
                    <h3 className="mb-3">Login</h3>
                    <Login_Form />
                </div>
            </div>
        );
        
    }
}