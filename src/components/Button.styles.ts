import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'success';

const buttonVariant = {
    primary : 'purple',
    secundary : '#2AC7E3',
    danger : 'red',
    success : 'green',
}

interface ButtonContainerProps {
    variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    ${props => {
        return css`
            background-color: ${buttonVariant[props.variant]}
        `
    }}
`