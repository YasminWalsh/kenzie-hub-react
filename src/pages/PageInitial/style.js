import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 290px;

  button {
    width: 100%;
    background-color: var(--pink);
    border: 1px solid var(--pink);
  }

  button:hover {
    transition: 0.3s;
    background-color: var(--pinkFocus);
    border: 1px solid var(--pinkFocus);
  }
`;
