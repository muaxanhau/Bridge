import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  --ion-background-color: none;
`
export const Wrapper = styled.div`
  width: fit-content;
  box-shadow: 0px 0px 30px 5px var(--color-6);
  overflow: hidden;
  border-radius: var(--border-radius-1);
  margin: var(--padding-2) auto;
`
