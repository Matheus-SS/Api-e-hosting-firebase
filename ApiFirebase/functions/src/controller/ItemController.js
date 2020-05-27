/* eslint-disable promise/always-return */
const { database } = require("../database/index");
const { v4: uuid } = require("uuid");

class ItemController {
  async store(request, response) {
    try {
      await database
        .collection("items")
        .doc(uuid())
        .create({ item: request.body.item });
      return response.status(200).json({ msg: "item adicionado" });
    } catch (error) {
      console.log(error);
      return response.status(500).send(error);
    }
  }

  async show(request, response) {
    try {
      const document = database.collection("items").doc(request.params.item_id);
      const item = await document.get();
      const result = item.data();

      return response.status(200).json(result);
    } catch (error) {
      console.log(error);
      return response.status(500).send(error);
    }
  }

  async index(request, response) {
    try {
      let collectionItems = database.collection("items");
      let documentItems = await collectionItems.get();
      let itemsArray = [];
      documentItems.docs.forEach((documentSnapshot) =>
        itemsArray.push({
          id: documentSnapshot.id,
          item: documentSnapshot.data().item,
        })
      );

      return response.status(200).json(itemsArray);
    } catch (error) {
      console.log(error);
      return response.status(500).send(error);
    }
  }

  async update(req, res) {
    try {
      const document = database.collection("items").doc(req.params.item_id);
      await document.update({
        item: req.body.item,
      });
      return res.status(200).json({ msg: "item atualizado" });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }

  async delete(req, res) {
    try {
      const document = database.collection("items").doc(req.params.item_id);
      await document.delete();
      return res.status(200).json({ msg: "item deletado" });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }
}
exports.ItemController = new ItemController();
