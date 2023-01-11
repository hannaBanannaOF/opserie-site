
import { BiLinkExternal } from 'react-icons/bi';
import React, { ReactElement } from 'react';

export interface SocialIconProps {
  icon: ReactElement,
  title: string,
  text: string,
  url: string
}

export function SocialIcon(props: SocialIconProps) {
  return (
    <a href={props.url} style={{ color: "white", textDecoration: "none" }} target={"_blank"} rel={"noreferrer"}>
      <div style={{ display: "flex", flexDirection: "row", gap: "8px", alignItems: 'center' }}>
        {React.cloneElement(props.icon, { title: props.title, className: "icon" })}
        <p>{props.text}</p>
        <BiLinkExternal />
      </div>
    </a>
  );
}