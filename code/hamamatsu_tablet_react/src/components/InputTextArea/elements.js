import styled from 'styled-components'

export const TextArea = styled.textarea`
  outline: none;
  color: var(--color-5);
  ${({ disableBorder }) => !disableBorder && `padding: var(--padding-1);`};
  ${({ disableBorder }) => disableBorder && `border: none;`}

  &::placeholder {
    color: var(--color-4);
    opacity: 0.5;
  }
`
