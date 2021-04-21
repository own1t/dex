import styled from "styled-components";

export const AdminContainer = styled.div`
  /* border: 1px solid red; */

  button {
    color: #fff;
    background-color: var(--blue-soft);
    outline: none;
    margin-top: 10px;
    padding: 8px 10px;

    &:hover {
      background-color: var(--blue-strong);
    }
  }
`;

export const AdminWrapper = styled.div`
  /* border: 1px solid red; */

  margin: 10px;
  padding: 20px;
  border: 1px solid gray;
`;

export const AdminHeader = styled.h3`
  margin-bottom: 15px;
  border-bottom: 5px solid var(--blue-soft);
  font-size: 1.5rem;
`;

export const AdminItem = styled.div`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AdminLabel = styled.label`
  flex: 0.3;
  display: flex;
  margin-left: 10px;
  font-size: 1rem;
`;

export const AdminInput = styled.div`
  flex: 0.6;
  display: flex;
  align-items: center;

  > input {
    width: 100% !important;
    outline: none;
    padding: 10px 0 10px 20px;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;

export const AdminBottom = styled.div`
  display: flex;
`;

export const AdminRight = styled.div`
  flex: 0.1;
  margin: 5px;
  margin-left: auto;
  margin-right: 0;
`;
