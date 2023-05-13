import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


function Contacts (){
    return (
        <div className="callToAction " id="contact">
        <h4>Get in Touch !</h4>
            <div className="footer-icons">
            <i className="icons linkedIn">
            <a href="https://www.linkedin.com/in/arun-mohanraj-b295aa128/"><LinkedInIcon style={{ fontSize: 40,color:"#5c5e5d" }}/></a>
            </i>
            <i className="icons mail">
            <a href="mailto:arunbmohanraj@gmail.com"><MailOutlineIcon style={{ fontSize: 40,color:"#5c5e5d" }}/></a>
            </i>
            <i className="icons whatsapp">
            <a href="https://wa.me/918667272914"><WhatsAppIcon style={{ fontSize: 40,color:"#5c5e5d" }}/></a>
            </i>
            <p> ❤ Arunn B. Mohanraj ❤ </p>
            </div>
           
        </div>
    )
}

export default Contacts;
