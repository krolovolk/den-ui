import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: max-content;
  & > button {
    border: 0 none;
    &:not(:last-child):not(:first-child) {
      border-radius: 0;
    }
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;
