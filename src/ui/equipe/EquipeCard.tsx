import logoRedux from "../../images/logo-reduzida.png";

export interface EquipeCardProps {
    name: string;
    image?: string;
    role?: string;
}

export function EquipeCard(props: EquipeCardProps) {

    const addDefaultSrc = (ev: any) => {
        ev.target.src = logoRedux;
    }

    return (
        <div className="avatar-wrap">
            <div className="avatar">
                <img src={props.image ?? logoRedux} alt={props.name} onError={addDefaultSrc}/>
            </div>
            <div>
                <span>{props.name}</span>
                <br />
                {props.role && <small>({props.role})</small>}
            </div>
        </div>
    );
}