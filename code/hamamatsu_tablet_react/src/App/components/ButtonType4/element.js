import styled from 'styled-components'

export const Button = styled.button`
  background-color: var(--color-3);
  border-radius: var(--border-radius-1);
  border: var(--border-1);
  border-color: var(--color-8);

  padding: ${({ size }) =>
    size === 'small' ? 'var(--button-padding-small)' : 'var(--button-padding)'};

  & p {
    font-size: var(
      ${({ size }) => (size === 'small' ? '--font-size-small' : '--font-size')}
    ) !important;
  }
`
