import styled from "styled-components";

export const StyledCart = styled.main`
  display: flex;
  justify-content: center;

  padding-top: 3vh;
  padding-bottom: 3vh;

  .no-items {
    padding-top: 30vh;
    text-align: center;
  }
`;

export const CartDetail = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1pt solid black;
  padding: 0.5rem 2rem;

  h2 {
    text-align: center;
  }
`;
