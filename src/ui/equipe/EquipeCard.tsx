import logoRedux from "../../images/logo-reduzida.png";

export interface EquipeCardProps {
    name: string;
    role?: string;
}

export function EquipeCard(props: EquipeCardProps) {
    return (
        <div className="avatar-wrap">
            <div className="avatar">
                <img src={logoRedux} alt={props.name} />
            </div>
            <div>
                <span>{props.name}</span>
                <br />
                {props.role && <small>({props.role})</small>}
            </div>
        </div>
    );
}