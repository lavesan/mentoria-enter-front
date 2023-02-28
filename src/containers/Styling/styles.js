import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => {
    console.log("theme: ", theme);
    return css`
      display: flex;
      flex-flow: row nowrap;
      background-color: red;

      .text {
        color: ${theme.color.primary};
        transition: 0.3s;

        &:hover {
          color: blue;
        }
      }
    `;
  }}
`;
