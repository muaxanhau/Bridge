import styled from 'styled-components'

export const InputC = styled.input`
  outline: none;
  color: var(--color-5);
  ${({ disableBorder }) => disableBorder && `border: none;`}

  &:focus {
    box-shadow: ${({ disableBorder }) =>
      !disableBorder
        ? 'inset 0px 0px 4px var(--color-11), 0 0 5px var(--color-11)'
        : 'none'};
  }

  &::placeholder {
    color: var(--color-4);
    opacity: 0.5;
  }
`
