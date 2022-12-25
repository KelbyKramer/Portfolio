import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];
export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    pathName
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to={{ pathname: pathName }} target="_blank" className='btn-mobile'>
            <button 
                className={'btn'}
                onClick={onClick}
                type={type}>
                {children}
            </button>
        </Link>
    )
};