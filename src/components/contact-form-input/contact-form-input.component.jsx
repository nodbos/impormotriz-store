import React from 'react';
import { Icon, Input } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './contact-form-input.styles.scss';

/*<input
                className='form-input'
                onChange={handleChange}
                {...otherProps}
                required
            />*/

/*{label ? (
                <label
                    className={`${
                        otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}>
                    {label.toUpperCase()}
                </label>
            ) : null}*/

const FormInput = ({
    handleChange,
    label,
    icon,
    type,
    ...otherProps
}) => {
    return (
        <div className='group'>
            <Input
                type={type}
                size='big'
                iconPosition='left'
                placeholder={label}
                onChange={handleChange}
                {...otherProps}
                required>
                <Icon name={icon} />
                <input />
            </Input>
        </div>
    );
};

export default FormInput;
