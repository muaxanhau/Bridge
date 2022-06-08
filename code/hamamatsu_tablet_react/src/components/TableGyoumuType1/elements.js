import styled from 'styled-components'

export const Row = styled.tr`
  border-bottom: var(--border-2);
`
export const Table = styled.table`
  border: var(--border-2);

  & thead ${Row} {
    background-color: var(--color-11);
  }
`
export const Column = styled.td`
  padding: var(--padding-1);

  &:nth-child(1),
  &:nth-child(2) {
    text-align: center;
  }

  &:nth-child(1) {
    border-right: var(--border-2);
  }
`
export const THead = styled.thead``
export const TBody = styled.tbody``
