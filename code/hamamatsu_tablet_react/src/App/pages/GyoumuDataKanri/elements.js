import styled from 'styled-components'

export const ContentContainer = styled.div`
  --ion-background-color: none;
  height: calc(100% - var(--header-bar));
  padding: var(--padding-1) var(--padding-2);
  display: flex;
  justify-content: space-between;
  gap: var(--gap-2);
`
export const TableWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
`
