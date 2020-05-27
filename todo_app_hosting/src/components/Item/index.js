import React, { useState } from "react";
import { Item, ConfirmButton, DeleteButton } from "./styles";
import api from "../../services/api";

function Items(props) {
  const [status, setStatus] = useState(false);

  return (
    <>
      <Item status={status}>
        <p>{props.value}</p>

        <div>
          <ConfirmButton onClick={() => setStatus(!status)}>Done</ConfirmButton>
          <DeleteButton onClick={() => props.onDeleteItem()}>
            Delete
          </DeleteButton>
        </div>
      </Item>
    </>
  );
}

export default Items;
