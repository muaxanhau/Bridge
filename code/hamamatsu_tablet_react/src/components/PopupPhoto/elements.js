import styled from 'styled-components'

export const Image = styled.img`
  height: calc(${window.innerHeight}px * 0.8);
  aspect-ratio: 5/4;
  background-color: var(--color-3);
  object-fit: contain;
`
