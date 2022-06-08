import styled from 'styled-components'

export const Button = styled.button`
  padding: ${({ size }) =>
    size === 'small' ? 'var(--button-padding-small)' : 'var(--button-padding)'};

  border-radius: var(--border-radius-1);

  & p {
    font-size: var(
      ${({ size }) => (size === 'small' ? '--font-size-small' : '--font-size')}
    ) !important;
  }
`
