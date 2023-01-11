import logo from '../../images/logo.png'
import { SocialIcon } from './SocialLink';
import { SiTwitter } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiTiktok } from 'react-icons/si';
import './header.css'

export function Header() {
  return (
    <div className={"flex-col header"}>
      <img src={logo} alt="Logo ODP série" width={"75%"} className={"centered"} style={{ marginBottom: "36px" }} />
      <div className={"centered flex-row social"}>
        <SocialIcon icon={<SiTwitter />} url={"https://twitter.com/SerieOrdemP"} title={"Twitter"} text={"@SerieOrdemP"} />
        <SocialIcon icon={<SiInstagram />} url={"https://www.instagram.com/serieordemp/"} title={"Instagram"} text={"/serieordemp"} />
        <SocialIcon icon={<SiTiktok />} url={"https://www.tiktok.com/@serieordemp"} title={"TikTok"} text={"@serieordemp"} />
      </div>
    </div>
  );
}