import React from "react";

import {
  DropdownContainer,
  DropdownList,
  DropdownItem,
} from "./DropdownElements";
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

export default Dropdown;
