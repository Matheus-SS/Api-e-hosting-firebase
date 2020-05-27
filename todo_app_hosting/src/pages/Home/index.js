import React, { useState, useEffect } from "react";

import api from "../../services/api";
import Items from "../../components/Item";
import { Container, Form, ItemList } from "./styles";

function Home() {
  const [newItem, setNewItem] = useState("");

  const [items, setItems] = useState([]);

  async function loadItems() {
    const response = await api.get("/api/read");
    const items = response.data;
    setItems(items);
  }

  async function handleAddItem(event) {
    event.preventDefault();

    if (newItem === "") {
      return alert("Campo vazio");
    }

    await api.post("/api/create", {
      item: newItem,
    });

    setNewItem("");
    await loadItems();
  }

  async function handleRemoveItem(id) {
    const newItems = items.filter((item) => item.id !== id);

    await api.delete(`/api/delete/${id}`);

    setItems([...newItems]);
  }

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <Container>
      <h1>ToDo List</h1>

      <Form onSubmit={handleAddItem}>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Adicionar item"
        />
        <button type={"submit"}>Adicionar</button>
      </Form>

      <ItemList>
        {items.map((item) => (
          <Items
            key={item.id}
            value={item.item}
            onDeleteItem={() => handleRemoveItem(item.id)}
          />
        ))}
      </ItemList>
    </Container>
  );
}

export default Home;
