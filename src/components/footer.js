import { useContext } from "react";
import UserContext from "../context/user";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    const {user} = useContext(UserContext);


    return(
        <footer className="bg-white justify-center" style={{textAlign:'center'}}>
            <div className="=footer-content">
                <img style={{maxWidth: "23%"}} src="https://media.discordapp.net/attachments/925170620931661844/1059234452166955038/typography.png"/>
                <p></p>
                <ul className="socials">
                </ul>
            </div>
            <div className="footer-bottom">
                <p style={{color:'white'}}>Copyright © 2022-2023 UMRideHub - All Rights Reserved. </p>
                        <div className="footer-menu">
                        <ul className="f-menu" style={{paddingBottom:'10px', paddingTop:'10px'}}>
                            <li style={{color:'white'}}><p>Ritij Jutur</p></li>
                            <li className="ml-3"><a href="https://github.com/masterspin/" target="_blank"><button className="button-9" ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></button></a></li>
                            <li className=""><a href="https://www.linkedin.com/in/rjutur/" target="_blank"><button className="button-10"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></button></a></li>
                        </ul>
                        <ul className="f-menu">
                            <li style={{color:'white'}} className=""><p>Rohit Saripalle</p></li>
                            <li><a href="https://github.com/poho40/" target="_blank"><button className="button-9"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></button></a></li>
                            <li><a href="https://www.linkedin.com/in/rohitsar/" target="_blank"><button className="button-10"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></button></a></li>
                        </ul>
                            
                        </div>
            </div>
        </footer>
    )
}