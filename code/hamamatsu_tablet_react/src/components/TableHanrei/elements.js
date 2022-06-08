import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  position: fixed;
  left: var(--padding-1);
  bottom: var(--padding-1);
  background-color: var(--color-1);
  border-radius: var(--border-radius-1);
  padding: calc(var(--padding-1) / 2);
  padding-top: ${({ minHeight }) => `calc(${minHeight} + var(--padding-1)
  )`};
  z-index: 999;
  overflow: hidden;

  & > div {
    transition: var(--transition)
      ${({ show }) => (show ? 'var(--transition)' : '0s')};
    opacity: ${({ show }) => (show ? 1 : 0)};
  }

  transition: var(--transition)
    ${({ show }) => (show ? '0s' : 'var(--transition)')};
  max-height: ${({ show, minHeight }) => (show ? '100vh' : `${minHeight}`)};
`
export const TypeContainer = styled.label`
  display: flex;
  gap: var(--gap-1);
  align-items: center;
`
