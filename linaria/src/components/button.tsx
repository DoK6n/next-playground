import { styled } from '@linaria/react';

export const Button = styled.button`
  font-size: 1rem;
  height: 2.5rem;
  min-width: 2.5rem;

  border-radius: 6px;
  cursor: pointer;

  -webkit-tap-highlight-color: transparent;

  outline: none;
  border: none;
  box-sizing: border-box;

  transition: all 0.2s ease-out;

  padding-left: 1em;
  padding-right: 1em;

  background: #8d92e9;
  color: rgba(255, 255, 255, 1);
  &:hover {
    background: #767fd2;
  }

  &:active {
    background: #a2a6ed;
  }

  &:disabled {
    filter: grayscale(15%);
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:focus-visible {
    box-shadow: 0 0 0.5rem #a2a6ede4;
  }
`;
