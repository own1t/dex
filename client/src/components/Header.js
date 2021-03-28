import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";

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

const HeaderContainer = styled.header`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const HeaderLeft = styled.div``;

const HeaderRight = styled.div`
  margin-left: auto;
  margin-right: 25px;
`;

export default Header;
