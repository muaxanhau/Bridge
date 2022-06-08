import styled from 'styled-components'
const BACKGROUND_COLOR = 'var(--color-11)'

export const SideBar = styled.div`
  overflow: hidden;
  opacity: ${({ show }) => (show ? 1 : 0)};
  width: ${({ show }) => (show ? 'var(--side-bar-width)' : '0px')};
  border-right: var(--border-2);
  border-color: var(--color-3);
  box-sizing: border-box;

  transition: width var(--transition)
      ${({ show }) => (show ? '0s' : 'var(--transition)')} ease,
    opacity var(--transition)
      ${({ show }) => (show ? 'var(--transition)' : '0s')} ease-in-out;
`
export const SideBarHeader = styled.div`
  display: flex;
  gap: var(--gap-2);
  align-items: center;
  padding: var(--padding-1);
  background-color: ${BACKGROUND_COLOR};
  height: var(--header-bar);
`
export const SideBarBody = styled.div`
  width: 100%;
  height: calc(100vh - var(--header-bar));
  overflow: scroll;
  padding: 0 var(--padding-1);
  --ion-background-color: none;
`
export const RightContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`
export const MainContent = styled.div`
  height: calc(100vh - var(--header-bar));
  overflow-y: scroll;
`
export const HeaderBar = styled.div`
  background-color: ${BACKGROUND_COLOR};
  padding: var(--padding-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderBarLeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2);
`
