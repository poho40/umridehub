import { useContext } from "react";
import UserContext from "../context/user";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    const {user} = useContext(UserContext);


    return(
        <footer className="bg-white justify-center" style={{textAlign:'center'}}>
            <div className="=footer-content h-0">
                <img style={{width: "10%"}} src="https://media.discordapp.net/attachments/925170620931661844/1059234452166955038/typography.png"/>
                <p></p>
                <ul className="socials">
                </ul>
            </div>
            <div className="footer-bottom">
                <p style={{color:'white'}}>Copyright © 2022-2023 UMRideHub - All Rights Reserved. </p>
                        <div className="footer-menu">
                        <ul className="f-menu">
                            <li><a href="https://www.linkedin.com/in/rjutur/"><button><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></button></a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                        </div>
            </div>
        </footer>
    )
}