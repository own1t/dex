import styled from "styled-components";

export const NewOrderContainer = styled.div`
  /* border: 1px solid red; */

  height: 30%;

  button {
    color: #fff;
    background-color: var(--blue-strong);
    outline: none;

    &:hover {
      background-color: var(--blue-soft);
    }
  }

  .active {
    background-color: var(--blue-soft);
  }

  .submit {
    background-color: var(--blue-soft);
    margin-top: 10px;
    padding: 8px 10px;
  }

  .submit:hover {
    background-color: var(--blue-strong);
  }
`;

export const NewOrderWrapper = styled.div`
  margin: 10px;
  padding: 20px;
  border: 1px solid gray;
`;

export const NewOrderHeader = styled.h2`
  /* border: 1px solid red; */

  font-size: 1.5rem;
  margin-bottom: 15px;
  border-bottom: 5px solid var(--blue-soft);
`;

export const NewOrderItem = styled.div`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* padding: 15px 0; */
`;

export const NewOrderLabel = styled.label`
  /* border: 1px solid red; */

  flex: 0.3;
  display: flex;
  margin-left: 10px;
  font-size: 1rem;
`;

export const NewOrderData = styled.div`
  /* border: 1px solid red; */

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

  > button {
    width: 100% !important;
  }
`;

export const NewOrderBottom = styled.div`
  /* border: 1px solid red; */

  display: flex;
  /* align-items: center; */
`;

export const NewOrderRight = styled.div`
  /* border: 1px solid red; */

  flex: 0.1;
  margin: 5px;
  margin-left: auto;
  margin-right: 0;
`;
