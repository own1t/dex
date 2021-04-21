import styled from "styled-components";

export const AppInfoWrapper = styled.div`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none !important;
    color: #2773e8;
  }

  a:hover {
    color: var(--blue-soft);
  }
`;

export const AppInfoContainer = styled.div`
  /* border: 1px solid red; */

  margin: 10px;
  padding: 60px;
  border: 1px solid gray;
`;

export const AppInfoHeader = styled.h2`
  /* border: 1px solid red; */

  width: 100%;
  margin-bottom: 15px;
  border-bottom: 5px solid var(--blue-soft);
  font-size: 2.5rem;
`;

export const AppInfoBody = styled.div`
  /* border: 1px solid red; */

  > p {
    font-size: 1.5rem;
    margin: 31px;
  }
`;

export const AppInfoList = styled.ul`
  /* border: 1px solid red; */

  margin: 20px;
`;

export const AppInfoItem = styled.li`
  /* border: 1px solid red; */

  font-size: 1.25rem;
  margin: 20px;
`;

export const AppDescriptionContainer = styled.div`
  margin: 30px;
`;

export const AppDescription = styled.p`
  font-size: 1rem;
  margin: 10px 30px;
`;

export const AppInfoLink = styled.div`
  /* border: 1px solid red; */

  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`;
