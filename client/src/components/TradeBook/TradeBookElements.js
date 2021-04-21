import styled from "styled-components";

export const TradeBookContainer = styled.div`
  /* border: 1px solid red; */
  height: 20%;
  margin: 10px;
  padding: 20px;
  border: 1px solid gray;
  max-height: 240px;
  overflow-y: hidden;
`;

export const TradeBookHeader = styled.h2`
  margin-bottom: 15px;
  border-bottom: 5px solid var(--blue-soft);
  font-size: 1.5rem;
`;

export const Table = styled.div`
  /* border: 1px solid red; */

  width: 100%;
`;

export const TableWrapper = styled.div`
  /* border: 1px solid red; */

  width: 100% !important;
  padding: 10px;
  font-size: 0.8rem;
  font-weight: 800;
`;

export const TableBodyWrapper = styled.div`
  /* border: 1px solid red; */

  max-height: 100px;
  overflow: auto;
`;

export const TableRow = styled.div`
  /* border: 1px solid red; */

  display: flex;
`;

export const TableHeader = styled.div`
  /* border: 1px solid red; */

  width: 100% !important;
  padding: 10px;
  border: 1px solid #000;
  font-size: 0.8rem;
  font-weight: 800;
`;

export const TableData = styled.div`
  /* border: 1px solid red; */

  width: 100% !important;
  padding: 10px;
  border: 1px solid #000;
  font-size: 0.8rem;
`;
