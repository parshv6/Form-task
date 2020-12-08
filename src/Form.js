import React from 'react'
import "./Form.css"

function Form() {
    return (
        <div className="sidebar__form">
        <form className="form__submit">
            <h2><strong>Please fulfill the form below.</strong></h2>
            <label className="input__field" >Your Name(required)</label>
            <input type="text" className="input__form" />
            <label className="input__field" >Your Email(required)</label>
            <input type="email" className="input__form"/>
            <label className="input__field" >Your Message</label>
            <textarea className="form__textarea"></textarea>
            <input type="submit" value="Send" className="input__send"></input>
        </form>
        </div>
    )
}

export default Form
