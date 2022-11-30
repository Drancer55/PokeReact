import React from 'react';
import { useFetch } from '../data/useFetch';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './cards.css';

export const PokeCard = ({ url }) => {
    const state = useFetch(url); 
    const { loading, data } = state;
    console.log(data);
    return (
        <div>{
                loading ?
                <h1>Cargando...</h1> :
                    <Card>
                        <Card.Img variant="top" src={ data.sprites.other.home.front_default} alt="Pokémon" className='pokeimg'/>
                    <Card.Body>
                        <Card.Title className="poke-name">{data.name}</Card.Title>
                        <Card.Title>#{data.id}</Card.Title>
                    </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-dark">Ver más...</Button>
                        </Card.Footer>
                    </Card>
        }</div>
    )
}
