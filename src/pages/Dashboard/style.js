import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 800px;
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid var(--gray3);
  /*  top: 0;
  right: 0;
  position: fixed; */

  button {
    background-color: var(--gray3);
    border: 1px solid var(--gray3);
    padding: 0.5rem 1rem;
  }

  button:hover {
    transition: 0.3s;
    background-color: var(--gray2);
    border: 1px solid var(--gray2);
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  border-bottom: 1px solid var(--gray3);

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5rem;
    color: var(--gray0);
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5rem;
    color: var(--gray1);
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;

  div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  div:first-child > p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5rem;
    color: var(--gray0);
  }
  div:first-child > button {
    background-color: var(--gray3);
    border: 1px solid var(--gray3);
    padding: 0.2rem 0.5rem;
  }

  button:hover {
    transition: 0.3s;
    background-color: var(--gray2);
    border: 1px solid var(--gray2);
  }
`;
