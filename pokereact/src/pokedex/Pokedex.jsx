import React, {useState} from 'react';
import { useFetch } from '../data/useFetch';
import { Cards } from '../cards/Cards';
import { CgGames, CgPokemon } from 'react-icons/cg';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import './pokedex.css';

export default function Pokedex() {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const state = useFetch(url); 
    const { loading, data } = state;

    // loading ? console.log('cargando'): console.log(data.results);

    return (
        <div>
            <h1 className='title-pokedex' ><CgGames/> Pokédex <CgPokemon className='App-ball'/></h1>
            
            {
                loading ? 
                <h5 className='loading'>Cargando...</h5> :
                <div>
                    <Cards results={data.results} />
                    <div className="pagination">
                        <Button variant="outline-success" onClick={() => setUrl(data.previous)}><FaAngleDoubleLeft/> Previo</Button>
                        <Button variant="outline-success" onClick={()=> setUrl(data.next)}>Siguiente <FaAngleDoubleRight/></Button>
                    </div>
                </div>
            }
        </div>
    )
}
