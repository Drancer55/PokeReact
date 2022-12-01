import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useFetch } from '../data/useFetch';
import './cards.css'

const ModalCharacter = ({ id, name, types, src }) => {
    let tipos = Object.values({ types });
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/characteristic/' + `${id}` + '/');
    const state = useFetch(url);
    const { loading, data } = state;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/*  Button in PokeCard*/}
            <Button variant="outline-dark" size="sm" onClick={handleShow} className="btnMdl">
                See more...
            </Button>
            {/* Modal with characters */}
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header closeButton>
                    <Modal.Title>
                        #{id}  \
                    </Modal.Title>
                    <Modal.Title id="contained-modal-title-vcenter" className="ModTitle poke-name" >
                        {name + "    " + "(" + tipos + ")"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <img src={src} alt={name} className='imagenModal' />
                </Modal.Body>
                <Modal.Footer className="mdlFooter">
                    <Button onClick={handleClose} variant="success" className="modalbtn">Aceptar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalCharacter