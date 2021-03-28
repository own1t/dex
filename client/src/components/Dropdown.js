import React from "react";

import styled from "styled-components";
import { Button } from "@material-ui/core";

const Dropdown = ({ onSelect, activeItem, items }) => {
  const selectItem = (e, item) => {
    e.preventDefault();

    onSelect(item);
  };

  return (
    <DropdownContainer>
      <Button>Assets</Button>
      <DropdownList>
        {items &&
          items.map((item, idx) => (
            <DropdownItem
              className={`dropdown-item ${
                item.value === activeItem.value ? "active" : null
              }`}
              href="#"
              key={idx}
              onClick={(e) => selectItem(e, item.value)}
            >
              {item.label}
            </DropdownItem>
          ))}
      </DropdownList>
    </DropdownContainer>
  );
};

const DropdownList = styled.ul`
  display: none;
  position: absolute;
  background-color: #151515;
  min-width: 160px;
  padding: 12px 16px;
  z-index: 1;
  cursor: pointer;
`;

const DropdownContainer = styled.div`
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

const DropdownItem = styled.li`
  color: #fff;
  list-style: none;
  padding: 10px;

  &:hover {
    background-color: var(--blue-soft);
    color: #fff;
  }
`;

export default Dropdown;
