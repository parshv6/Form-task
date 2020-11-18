import React from 'react'
import "./Info.css"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import ScheduleIcon from "@material-ui/icons/Schedule"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';



function Info() {
    return (
        <div className="sidebar__info">
            <div className="before__contact">
                <h3>BEFORE CONTACTING US</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
            <div className="contact__information">
                <h3>CONTACT INFORMATION</h3>
                <p>184 Main Collins Street West Victoria 8007 Australia</p>
                <p><IconButton><PhoneIcon/></IconButton>  1800-222-222</p>
                <p><IconButton><EmailIcon /></IconButton> contact@versatilewptheme.com</p>
                <p><IconButton><ScheduleIcon/></IconButton>  Everyday 9:00-17:00</p>
            </div>
            <div className="social__media">
               <h3>SOCIAL MEDIA</h3>
               <IconButton>
               <FacebookIcon/>
               </IconButton>
               <IconButton>
               <TwitterIcon/>
               </IconButton>
               <IconButton>
               <LanguageIcon/>
               </IconButton>
               <IconButton>
               <PinterestIcon/>
               </IconButton>
               <i className="fab fa-google-plus"></i>
               <IconButton>
               <InstagramIcon/>
               </IconButton>
            </div>
        </div>
    )
}

export default Info
