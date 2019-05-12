import React from 'react';
import PropTypes from 'prop-types';
import './Styles.css';

const NombreRep = ({ nombre }) => (
    <div className="NombreRepCont">
        <span className="nombre">{nombre}</span>
    </div>
);

NombreRep.propTypes = {
    nombre : PropTypes.string,
};

export default NombreRep;