import React from 'react';
import { PokeCard } from './PokeCard';

export const Cards = ({results}) => {
    return (
        <div className='container'>
            <div className='cards'>
                {
                    results.map(poke => {
                        return(
                        <div key={poke.name}>
                            <PokeCard className='card-item' url={ poke.url } />
                        </div>
                    )})
                }
            </div>
        </div>
    )
}
