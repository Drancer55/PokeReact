import React from 'react';
import { useFetch } from '../data/useFetch';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './cards.css';
import ModalCharacter from './ModalCharacter';

export const PokeCard = ({ url }) => {
    const state = useFetch(url); 
    const { loading, data } = state;

    return (
        <div>{
                loading ?
                <h1>Cargando...</h1> :
                    <Card>
                        <Card.Img variant="top" src={ data.sprites.other.home.front_default} alt="Pokémon" className='pokeimg'/>
                    <Card.Body>
                        <Card.Title>
                            #{data.id}
                            <h2 className="poke-name">{data.name}</h2>
                        </Card.Title>
                        <Card.Text>
                            <h3 className='poke-types'>{data.types.map(type => {
                                return (
                                    <p className='type-name'>{type.type.name}</p>
                                )
                            })}</h3>
                        </Card.Text>
                    </Card.Body>
                        <Card.Footer>
                        <ModalCharacter
                            id={data.id}
                            name={data.name}
                            types={data.types.map(type => type.type.name)}
                            src={data.sprites.other.dream_world.front_default}
                        />
                        </Card.Footer>
                    </Card>
        }</div>
    )
}
