import './equipe.css';
import { EquipeCard } from './EquipeCard';
import data from '../../equipe.json';
import { EquipeType } from '../../@types/equipe';
import React from 'react';

export function Equipe() {
    console.log(data);
    return (
        <div className='flex-col'>
            <h1 className="centered title">Conheça nossa equipe</h1>
            {data.map((element) => {
                return <div>
                    <h5 className='centered subtitle'>{element.sectionName}</h5>
                    <div className='flex-row flex-col-sm center-content centered' style={{ marginBottom: "24px" }}>
                        {element.people.map((e : EquipeType) => {
                            return <EquipeCard name={e.name} role={e.role} image={e.image} desc={e.desc}/>
                        })}
                    </div>
                </div>
            })}
        </div>
    );
}