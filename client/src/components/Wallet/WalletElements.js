import styled from "styled-components";

export const WalletContainer = styled.div`
  /* border: 1px solid red; */

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

export const WalletBalance = styled.div`
  /* border: 1px solid red; */

  margin: 10px;
  padding: 20px;
  border: 1px solid gray;
`;

export const WalletTransfer = styled.div`
  /* border: 1px solid red; */

  margin: 10px;
  padding: 20px;
  border: 1px solid gray;
`;

export const WalletTransferBottom = styled.div`
  /* border: 1px solid red; */

  display: flex;
  justify-content: space-between;
`;

export const WalletTransferRight = styled.div`
  /* border: 1px solid red; */

  flex: 0.1;
  margin: 5px;
  margin-left: auto;
  margin-right: 0;
`;

export const WalletHeader = styled.h3`
  /* border: 1px solid red; */

  margin-bottom: 15px;
  border-bottom: 5px solid var(--blue-soft);
  font-size: 1.5rem;
`;

export const WalletItem = styled.div`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* padding: 15px 0; */
`;

export const WalletLabel = styled.label`
  /* border: 1px solid red; */

  flex: 0.3;
  display: flex;
  margin-left: 10px;
  font-size: 1rem;
`;

export const WalletData = styled.div`
  /* border: 1px solid red; */

  flex: 0.6;
  display: flex;
  align-items: center;

  > input {
    width: 100% !important;
    outline: none;
    padding: 10px;
    padding-left: 20px;
    border: 1px solid gray;
    border-radius: 5px;
  }

  > button {
    width: 100% !important;
  }
`;

export const WalletInput = styled.div`
  /* border: 1px solid red; */

  flex: 0.6;
  display: flex;
  align-items: center;

  > input {
    width: 90% !important;
    outline: none;
    padding: 10px;
    padding-left: 20px;
    border: 1px solid gray;
    border-radius: 5px;
  }

  > span {
    padding: 6px 10px;
    border-radius: 5px;
    background-color: black;
    color: #fff;
  }

  > button {
    width: 100%;
  }
`;
