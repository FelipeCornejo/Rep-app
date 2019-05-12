import React from 'react';
import PropTypes from 'prop-types';
import NombreRep from './NombreRep';
import RepositorioExtraInfo from './RepositorioExtraInfo';
import './Styles.css';

const Repositorios = ( { data: { nombre, descripcion, fecha } } ) => {
    return (<div className="RepositoriosCont">
        <NombreRep nombre={nombre}/>
        <RepositorioExtraInfo descripcion={descripcion} fecha={fecha}/>
    </div>);
};

Repositorios.propTypes = {
    data: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
    })
}

export default Repositorios;