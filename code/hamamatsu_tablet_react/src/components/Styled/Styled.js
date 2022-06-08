import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const TitleWrapper = styled.div`
  padding: calc(var(--padding-1) / 2);
  background-color: var(--color-7);
  display: flex;
  justify-content: center;
  align-items: center;
  border: var(--border-1);
`
const ContentRow = styled.div`
  display: flex;
  gap: var(--gap-1);
`
const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);
`
const Spacing1 = styled.div`
  width: 100%;
  height: var(--padding-1);
`
const Spacing2 = styled.div`
  width: 100%;
  height: var(--padding-2);
`
const Spacing3 = styled.div`
  width: 100%;
  height: calc(var(--padding-2) * 1.5);
`
const Table = styled.table`
  flex: 1;
`
const TBody = styled.tbody``
const Row = styled.tr``
const Column = styled.td`
  border: var(--border-1);
  padding: calc(var(--padding-1) / 2);
  min-width: ${({ disableMinWidth }) => (disableMinWidth ? '0' : '10ch')};
`
const ColumnTitle = styled.td`
  border: var(--border-1);
  padding: calc(var(--padding-1) / 2);
  min-width: ${({ disableMinWidth }) => (disableMinWidth ? '0' : '10ch')};
  background-color: var(--color-7);
  text-align: center;

  & > p {
    color: var(--color-6) !important;
  }
`
const Image = styled.img`
  aspect-ratio: 5 / 4;
  object-fit: contain;
  overflow: hidden;
  background-color: var(--color-3);
  max-width: 30vw;
`
const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 18ch;
`

const Styled = {
  Container,
  TitleWrapper,
  ContentRow,
  ContentCol,
  Spacing1,
  Spacing2,
  Spacing3,
  Table,
  TBody,
  Row,
  Column,
  Image,
  DateContainer,
  ColumnTitle
}
export default Styled
