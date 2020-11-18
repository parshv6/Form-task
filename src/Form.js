import { Button } from '@material-ui/core'
import React from 'react'
import "./Form.css"

function Form() {
    return (
        <div className="sidebar__form">
        <form className="form__submit">
            <h2><strong>Please fulfill the form</strong></h2>
            <h3>Your Name (required)</h3>
            <input type="text" className="input__form" />
            <h3>Your Email(required)</h3>
            <input type="email" className="input__form"/>
            <h3 className="your__message">Your Message</h3>
            <textarea className="form__textarea"></textarea>
            <Button variant="contained" className="send__button" color="primary">Send</Button>
        </form>
            
            
        </div>
    )
}

export default Form
