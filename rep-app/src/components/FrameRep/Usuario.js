import React from 'react';
import PropTypes from 'prop-types';
import './Styles.css'

const Usuario = ({ username }) => (
    <div className="UsuarioCont">
        <h1>
            {username}
        </h1>
    </div>
);
Usuario.propTypes = {
    username: PropTypes.string.isRequired,
};

export default Usuario;