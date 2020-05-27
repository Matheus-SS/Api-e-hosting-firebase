import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
`;
export const Form = styled.form`
  display: flex;

  margin-top: 20px;
  max-width: 600px;
  input {
    flex: 1;

    color: #fff;
    border: 0;
    background: transparent;
    border-bottom: 1px solid #fff;
    padding: 10px;
    margin-right: 20px;
  }

  button {
    width: 100px;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    margin-right: 5px;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

export const ItemList = styled.div`
  margin-top: 40px;

  max-width: 400px;
  height: 400px;
  overflow-y: auto;
`;
