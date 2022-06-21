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

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 4px;
    background-color: var(--gray3);
    padding: 1rem;
  }

  form > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.5rem;
      color: var(--gray0);
    }
  }

  form > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    padding: 0.5rem;

    input,
    button {
      width: 100%;
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 1.5rem;
      color: var(--gray1);
      margin-top: -1rem;
    }

    input {
      background-color: var(--gray2);
      border: 1px solid var(--gray2);

      color: var(--gray1);
    }
    input:focus {
      border: 2px solid var(--gray1);
      color: var(--gray0);
    }

    button {
      background-color: var(--pink);
      border: 1px solid var(--pink);
    }

    button:hover {
      transition: 0.3s;
      background-color: var(--pinkFocus);
      border: 1px solid var(--pinkFocus);
    }
  }

  form > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    width: 100%;

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 1.5rem;
      color: var(--gray1);
    }

    button {
      background-color: var(--gray1);
      border: 1px solid var(--gray1);

      width: 100%;
    }

    button:hover {
      transition: 0.3s;
      background-color: var(--gray2);
      border: 1px solid var(--gray2);
    }
  }
`;
