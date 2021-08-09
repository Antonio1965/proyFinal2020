import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1pt solid black;
  padding: 0.5rem 2rem;

  margin-left: 4rem;

  h2 {
    text-align: center;
  }

  input {
    margin: 0.45rem;
    border: 1pt solid black;
    padding: 0.5rem 0.75rem;
    font-weight: bold;

    &:focus {
      outline: none;
      border: 2pt solid ${(props) => props.theme.special};
    }
  }

  button {
    margin: 1rem 2.70rem;
    border: none;
      background-color: crimson;
      color: white;
      font-size: .8rem;
      font-weight: bold;
      border-radius: 99px;
      padding: 1rem 1.5rem !important;
  }
`;