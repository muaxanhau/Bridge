import styled from 'styled-components'

const COLOR_SELECTED = '--color-14'

export const Row = styled.tr`
  border-bottom: var(--border-2);
  background-color: var(
    ${({ selected }) => (selected ? COLOR_SELECTED : '--color-1')}
  );

  /* display: table;
  width: 100%; */

  &:nth-child(2n + 1) {
    background-color: var(
      ${({ selected }) => (selected ? COLOR_SELECTED : '--color-3')}
    );
  }
`
export const THead = styled.thead`
  /* display: table;
  width: 100%; */
`
export const Table = styled.table`
  width: 100%;
  border: var(--border-2);

  & ${THead} ${Row} {
    background-color: var(--color-11);
  }
`
export const TBody = styled.tbody`
  /* display: block;
  max-height: 300px;
  overflow-y: scroll; */
`
export const Column = styled.td`
  padding: var(--padding-1);
  word-break: break-all;

  &:nth-child(1) {
    text-align: center;
  }
`
