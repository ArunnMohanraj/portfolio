import React from "react";
import Typed from "react-typed";

function Header() {
    return (
        <div className='header-wrapper'>
            <div className="main-info" id ="home">
            <h1>Arun Mohanraj</h1>
            <Typed
                className="typed-text"
                strings={["Designer","Web Developer","Freelancer"]}
                typeSpeed={70}
                backSpeed={70}
                loop
            />
            <a class="btn btn-outline-light btn-small" href="https://drive.google.com/file/d/1VF_q_6XL0bhVVn0xMjPbk_rCLVuG-Drz/view" role="button" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
         </div>
    )
}

export default Header;
