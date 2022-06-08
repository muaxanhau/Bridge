import styled from 'styled-components'

const MAX_HEIGHT = 'calc(100vh - var(--header-bar) - 2 * var(--padding-1))'

export const Container = styled.div`
  position: fixed;
  right: var(--padding-1);
  bottom: var(--padding-1);
  background-color: var(--color-1);
  border-radius: var(--border-radius-1);
  padding: calc(var(--padding-1) / 2);
  overflow: hidden;
  height: ${MAX_HEIGHT};
  z-index: 999;

  & > div {
    transition: var(--transition)
      ${({ show }) => (show ? 'var(--transition)' : '0s')};
    opacity: ${({ show }) => (show ? 1 : 0)};
  }

  transition: var(--transition)
    ${({ show }) => (show ? '0s' : 'var(--transition)')};
  max-width: ${({ show, minWidth }) => (show ? '45vw' : minWidth)};
`
export const TableContainer = styled.div`
  height: 100%;
  overflow: scroll;
`

const COLOR_SELECTED = '--color-14'
const COLOR_TESTED = '--color-15'

export const Row = styled.tr`
  background-color: var(
    ${({ tested, selected }) =>
      selected ? COLOR_SELECTED : tested ? '--color-1' : COLOR_TESTED}
  );
`
export const Table = styled.table`
  border: var(--border-1);
`
export const TBody = styled.tbody``
export const Column = styled.td`
  padding: var(--padding-1);
  word-break: break-all;
`
export const ColumnTitle = styled.td`
  padding: var(--padding-1);
  text-align: center;
  background-color: var(--color-7);
  font-weight: bold;
`
