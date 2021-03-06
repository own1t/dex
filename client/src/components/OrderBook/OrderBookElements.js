import styled from "styled-components";

export const OrderBookContainer = styled.div`
  /* border: 1px solid red; */

  margin: 10px;
  padding: 20px;
  border: 1px solid gray;
  max-height: 220px;
  overflow-y: hidden;

  .order-list-buy {
    background-color: green !important;
  }

  .order-list-sell {
    background-color: red !important;
  }

  @media screen and (max-width: 500px) {
    max-height: 100%;
  }
`;

export const OrderBookHeader = styled.h2`
  margin-bottom: 15px;
  border-bottom: 5px solid var(--blue-soft);
  font-size: 1.5rem;
`;

export const OrderBookTableContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const TableContainer = styled.div`
  /* border: 1px solid red; */

  flex: 1;
  margin: 0px 5px;
  max-height: 200px;
  min-height: 200px;
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

  &:hover {
    background: rgba(0, 0, 0, 1);
  }
`;

export const Header = styled.div`
  /* border: 1px solid red; */

  width: 100% !important;
  padding: 10px;
  font-weight: 800;
`;

export const TableHeader = styled.div`
  /* border: 1px solid red; */

  width: 100% !important;
  padding: 10px;
  border: 1px solid #000;
  background: rgba(0, 0, 0, 0.5);
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
