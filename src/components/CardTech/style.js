import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray3);
  padding: 1rem;
  border-radius: 4px;

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  ul > li {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--gray4);
    border: 1px solid var(--gray4);
    border-radius: 4px;

    &:hover {
      background-color: var(--gray2);
      border: 1px solid var(--gray2);
    }
  }

  ul > li > p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.5rem;
    color: var(--gray0);

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  ul > li > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  ul > li > div > span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5rem;
    color: var(--gray1);
  }

  ul > li > div > svg {
    color: var(--gray0);
    cursor: pointer;
  }
`;
