import { FaHeart } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';

export function Footer() {
    return (
        <div style={{ backgroundColor: "rgba(30, 30, 30, 0.6)", height: "120px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "end", padding: "12px" }}>
            <span>Ordem Paranormal é do Cellbit</span>
            <small>
                Made with <FaHeart color='red'/> by <a style={{ textDecoration: "none", color: "white" }} href='https://twitter.com/hannaBanannaOF' target={"_blank"} rel={"noreferrer"}>
                    <SiTwitter color='aqua'/>@hannaBanannaOF
                </a>
            </small>
        </div>
    );
}