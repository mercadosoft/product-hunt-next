import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Router from 'next/router';

const InputText = styled.input`
    border: 1px solid var(--gris3);
    border-radius: .5rem;
    padding: 1rem;
    min-width: 300px;
`;
const InputSubmit = styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 4rem;
    background-image: url('/static/img/buscar.png');
    background-repeat: no-repeat;
    position: absolute;
    right: .2rem;
    top: 2px;
    background-color: white;
    border: none;
    text-indent: -9999px;
    padding-bottom: 35px;
    padding-right: 35px;
    &:hover {
        cursor: pointer;
    }
`;

const Buscar = () => {

    const [ busqueda, guardarBusqueda ] = useState('');

    const buscarProducto = e => {
        e.preventDefault();
        
        if(busqueda.trim() === '') return;

        // Redireccionar a la pagina buscar
        Router.push({
            pathname: '/buscar',
            query: { q : busqueda }
        })
    }

    return ( 
        <form
            css={css`
                position: relative;
            `}
            onSubmit={buscarProducto}
        >
            <InputText 
                type="text" 
                placeholder="Buscar Productos"
                onChange={ e => guardarBusqueda(e.target.value) }
            />
            <InputSubmit type="submit" >Buscar</InputSubmit>
        </form>
     );
}
 
export default Buscar;