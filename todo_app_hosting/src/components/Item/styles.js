import styled, { css } from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(255, 255, 255, 0.1);

  border-radius: 4px;
  padding: 10px;

  & + div {
    margin-top: 10px;
  }
  p {
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    word-break: break-all;
    margin-right: 5px;
    flex: 1;

    ${(props) =>
      props.status &&
      css`
        color: #4c345a;
        text-decoration: line-through;
      `}
  }
`;

export const ConfirmButton = styled.button`
  border: 0;
  padding: 5px;
  border-radius: 4px;
  margin-right: 5px;
  font-weight: bold;
  background: #618c61;

  transition: background 0.2s;

  &:hover {
    background: #008000;
  }
`;

export const DeleteButton = styled.button`
  border: 0;
  padding: 5px;
  border-radius: 4px;
  font-weight: bold;
  background: #b73e3e;

  transition: background 0.2s;
  &:hover {
    background: #ff0000;
  }
`;
