 // src/components/molecules/FormField.js

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ATOMS/button'; // Check casing, it should be 'Button' instead of 'button'
// import Label from '../ATOMS/label'; // Check casing, it should be 'Label' instead of 'label'
// import Input from '../ATOMS/input_field'; // Check casing, it should be 'Input' instead of 'input_field'

const FormField = ({ label, inputType, inputValue, inputPlaceholder, onInputChange, onButtonClick }) => (
    <div className="form-field">
        {/* <Label>{label}</Label>
        <Input
            type={inputType}
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={onInputChange}
        /> */}
        <Button>{onButtonClick}</Button>
    </div>
);

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    inputValue: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
    onButtonClick: PropTypes.func.isRequired,
};

export default FormField;






// @media screen and (min-width: 480px) {
//     body {
//       background-color: lightgreen;
//     }
//   }
// @media screen and (min-width: 480px) {
//     #leftsidebar {width: 200px; float: left;}
//     #main {margin-left: 216px;}
//   }