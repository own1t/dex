import styled from "styled-components";

export const DropdownList = styled.ul`
  display: none;
  position: absolute;
  background-color: #151515;
  min-width: 160px;
  padding: 12px 16px;
  z-index: 1;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  .active {
    background-color: var(--blue-strong);
  }

  &:hover ${DropdownList} {
    display: block;
    margin-left: auto;
    margin-right: auto;
    right: 0;
  }

  button {
    color: #fff;
    background-color: var(--blue-soft);
    outline: none;

    &:hover {
      background-color: var(--blue-strong);
    }
  }
`;

export const DropdownItem = styled.li`
  color: #fff;
  list-style: none;
  padding: 10px;

  &:hover {
    background-color: var(--blue-soft);
    color: #fff;
  }
`;
