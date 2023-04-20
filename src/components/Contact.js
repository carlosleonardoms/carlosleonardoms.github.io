import React from "react";
import "./Contact.css";

function Contact(){
    return(
        <div className="contact-form-container">
             
            <div className="form-container">
                <h2>Shoot me a message!</h2>
                <form action="https://formsubmit.co/carlosleonardo@cvps.com.br" method="POST">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea type="text" id="message" name="message" required></textarea>

                <input type="hidden" name="_next" value="http://localhost:3000/About"/>

                <button type="submit">Submit</button>
                </form>
            </div>
            <div class="square-form"></div>
        </div>
    );
}

export default Contact;