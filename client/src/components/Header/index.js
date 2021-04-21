import React from "react";

import { HeaderContainer, HeaderLeft, HeaderRight } from "./HeaderElements";
import Dropdown from "../Dropdown";

const Header = ({ user, tokens, selectToken }) => {
  return (
    <HeaderContainer>
      <HeaderLeft></HeaderLeft>
      <HeaderRight>
        <Dropdown
          items={tokens.map((token) => ({
            label: token.ticker,
            value: token,
          }))}
          activeItem={{
            label: user.selectedToken.ticker,
            value: user.selectedToken,
          }}
          onSelect={selectToken}
        />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
