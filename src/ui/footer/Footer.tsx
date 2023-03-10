import { FaHeart } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';
import './footer.css';

export function Footer() {
    return (
        <div className='footer'>
            <small>Ordem Paranormal © 2020, Rafael Lange (Cellbit). Todos os direitos reservados.</small>
            <small>
                Made with <FaHeart color='red'/> by <a style={{ textDecoration: "none", color: "white" }} href='https://twitter.com/hannaBanannaOF' target={"_blank"} rel={"noreferrer"}>
                    <SiTwitter color='aqua'/>@hannaBanannaOF
                </a>
            </small>
        </div>
    );
}