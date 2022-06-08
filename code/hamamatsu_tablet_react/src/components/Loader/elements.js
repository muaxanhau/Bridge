import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`
export const Ring = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  padding: var(--padding-2);
  border: 5px solid var(--color-9);
  border-radius: 50%;
  border-left: none;
  border-top: none;
  animation: rotate 1.2s ease-in-out infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`
