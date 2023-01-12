import './equipe.css';
import { EquipeCard } from './EquipeCard';

export function Equipe() {
    return (
        <div className='flex-col'>
            <h1 className="centered title">Conheça nossa equipe</h1>
            <h5 className="centered subtitle">Diretor</h5>
            <div className="flex-row flex-col-sm center-content centered" style={{ marginBottom: "24px" }}>
                <EquipeCard name='Gabriel Pazini'/>
            </div>
            <h5 className="centered subtitle">Atores</h5>
            <div className="flex-row flex-col-sm center-content centered" style={{ gap: "40px", alignItems: "stretch", marginBottom: "24px" }}>
                <EquipeCard name='Lola Martins' role='Elizabeth Weber'/>
                <EquipeCard name='Lucas Brisot' role='Thiago Fritz'/>
                <EquipeCard name='Douglas Trindade' role='Daniel Hartmann'/>
            </div>
        </div>
    );
}