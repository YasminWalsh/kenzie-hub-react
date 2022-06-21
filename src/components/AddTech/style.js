import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  width: 100%;
  padding: 1rem;

  div {
    display: flex;
    flex-direction: row;
    border-top: 2px solid var(--gray2);

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    background-color: var(--gray2);
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.5rem;
      color: var(--gray0);
    }

    button {
      border: none;
      background-color: var(--gray2);
      color: var(--gray1);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 2px solid var(--gray3);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: var(--gray3);

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5rem;
    color: var(--gray1);
    margin-top: -1rem;
  }
  input,
  button,
  select,
  option {
    width: 100%;
  }

  option {
    display: flex;
    flex-wrap: wrap;
  }

  input,
  select {
    background-color: var(--gray2);
    border: 1px solid var(--gray2);

    color: var(--gray1);
  }

  input:focus {
    border: 2px solid var(--gray1);
    color: var(--gray0);
  }

  select:focus {
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
`;
