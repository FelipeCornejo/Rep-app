import React from 'react';
import PropTypes from 'prop-types';
import './Styles.css';

const RepositorioExtraInfo = ({ fecha, descripcion }) => (
    <div className="RepositorioExtraInfoCont">
        <span className="descripcion">{`descripción: ${descripcion}`}</span>
        <span className="fecha">{`${fecha}`}</span>
    </div>
);

RepositorioExtraInfo.propTypes = {
    fecha : PropTypes.string,
    descripcion : PropTypes.string.isRequired,
};

export default RepositorioExtraInfo;