/**
 * File: DefaultButton.tsx
 * Created by: sai @ 7/15/22
 */

import React, {FC, ButtonHTMLAttributes} from 'react';
import styled from 'styled-components';

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  icon?: React.ReactNode,
}

const IconContainer = styled.div`
  display: flex;
  height: 1rem;
  justify-content: center;
  margin-right: 0.5rem;
  width: 1rem;
`;

const Button: FC<DefaultButtonProps> = ({icon, children, ...props}) => {
  return (
    <button {...props}>
      {icon && (
        <IconContainer>
          {icon}
        </IconContainer>
      )}
      {children}
    </button>
  )
}

export const DefaultButton = styled(Button)`
  align-items: center;
  background-color: #535bf2;
  border-radius: 0.25rem;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem;
  min-width: 10rem;
  
  &:hover {
    background-color: #747bff;
    transition: background-color 300ms ease-in;
  }
`;
