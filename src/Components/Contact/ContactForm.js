import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return(
        <div className="contactContainer">
            <div className="title">
                <h1>Contact Us!</h1>
            </div>

            <div className="infoForm">
                    {/* <!-- all of my contact info  --> */}
                <div className="contactInfo">
                    {/* <!-- address info  --> */}
                    <div className="info">
                        <div className="icon">
                            <img src="https://cdn-icons-png.flaticon.com/128/1865/1865269.png" alt="map icon" />
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>8837 Albemarle Rd,</p>
                            <p>Charlote, North Carolina,</p>
                            <p>28227</p>
                            <p>United States</p>
                        </div>
                    </div>
                    {/* <!-- phone number info  --> */}
                    <div className="info">
                        <div className="icon">
                            <img src="https://cdn-icons-png.flaticon.com/128/9840/9840100.png" alt="phone icon" />
                        </div>
                        <div className="text">
                            <h3>Phone Number</h3>
                            <p>+1(123)456-7890</p>
                        </div>
                    </div>
                    {/* <!-- email info  --> */}
                    <div className="info">
                        <div className="icon">
                            <img src="https://cdn-icons-png.flaticon.com/128/562/562688.png" alt="mail icon" />
                        </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>fakeEmail123@gmail.com</p>
                        </div>
                    </div>
                </div>
            {/* the contact form */}
                <div className="contactForm">
                    <form>
                        <h2>Send Us A Message</h2>

                        <div className="input">
                            <input type="text" name="" required="required" placeholder="Ex: John Doe" />
                            <span>Full Name</span>
                        </div>

                        <div className="input">
                            <input type="text" name="" required="required" placeholder="your@email.com" />
                            <span>Email</span>
                        </div>

                        <div className="input">
                            <textarea required="required" placeholder="Your message goes here"></textarea>
                            <span>Your Message</span>
                        </div>

                        <div className="input">
                            <input type="submit" name="" value="send" />
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default ContactForm;