const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-me">
            <span className="contact-1">Contact Me</span>
            <span className="contact-2">Hi there, contact me to ask me about anything you have in mind.</span>
        </div>
        <div className="contact-details">
        <div className="contact-form">
            <div className="contact-form-1">
            <label htmlFor="first_name">First Name</label>
            <input type="text" id="first_name" placeholder="Enter your first name" />
        </div>
        <div className="contact-form-2">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id="last_name" placeholder="Enter your last name" />
        </div>
        </div>
        <div className="contact-form">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="mozzababy@gmail.com" />
        </div>
        <div className="contact-form-4">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible...."></textarea>
        </div>
        <div className="contact-form-5">
            <input type="checkbox" id="form_check" />
            <label htmlFor="form_check">You agree to providing your data to Blac_Pearl who may contact you</label>
        </div>
        </div>
        </div>
    )
}

export default Contact;