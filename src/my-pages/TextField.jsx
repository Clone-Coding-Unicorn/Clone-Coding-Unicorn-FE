import styled from 'styled-components';
import React from 'react';

const TextField = ({ type, name, small, ...rest }, ref) => {
    return (
        <Div>
            <input className={small ? 'alert' : ''} type={type} name={name} {...rest} ref={ref} />
            {small && <small role="alert">{small}</small>}
        </Div>
    );
};

export default React.forwardRef(TextField);

const Div = styled.div`
    margin: 1rem 0;
    position: relative;

    .alert {
        border: 1px solid #b22222;
    }
    input {
        display: block;
        width: 100%;
        padding: 10px 40px 11px 1.5rem;
        border: 1px solid #051619;
        border-radius: 0;
        box-sizing: border-box;
        box-shadow: 0;
        font: inherit;
        color: #051619;
        transition: all 0.2s;
        outline: none;
        box-shadow: none;
    }

    small {
        display: block;
        font-size: 12px;
        margin: 0.5rem 0;
        color: #b22222;
    }

    @media screen and (max-width: 1080px) {
        small {
            font-size: 10px;
        }
    }
`;
