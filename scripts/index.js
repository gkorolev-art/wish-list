import { wishes } from "./constants.js";
import { Card } from "./Card.js";

const cardsGrid = document.querySelector(".elements__list");

const createCard = (data) => {
  const card = new Card(data, "#card");

  return card.generateCard();
};

wishes.forEach((cardItem) => {
  cardsGrid.append(createCard(cardItem));
});
