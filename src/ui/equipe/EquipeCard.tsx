import logoRedux from "../../images/logo-reduzida.png";
import { Modal } from "../modal/Modal";

export interface EquipeCardProps {
    name: string;
    image?: string;
    role?: string;
    desc: string;
}

export function EquipeCard(props: EquipeCardProps) {

    const addDefaultSrc = (ev: any) => {
        ev.target.src = logoRedux;
    }

    return (
        <Modal 
            button={<div className="avatar-wrap">
                <div className="avatar">
                    <img src={props.image ?? logoRedux} alt={props.name} onError={addDefaultSrc}/>
                </div>
                <div className="flex-col">
                    <span>{props.name}</span>
                    {props.role && <small>({props.role})</small>}
                </div>
            </div>}
            header={props.name}
        >
            <div>{ props.desc }</div>
        </Modal>
    );
}