// src/components/atoms/Label.js

import React from 'react';
import PropTypes from 'prop-types';
 
const Label = ({ children }) => (
    <label className="form-label" style={{margin:"0px",padding:"0px"}}>
        {children}
    </label>
);

Label.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Label;
