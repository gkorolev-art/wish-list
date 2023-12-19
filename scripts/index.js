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

// const idArray = Array.from({ length: wishes.length }, (elem, index) => ({
//   id: `card-${index + 1}`,
// }));

// const idArray = Array.from(
//   { length: wishes.length },
//   (elem, index) => `card-${index + 1}`
// );

// console.log(idArray[8]);

console.log(wishes[8]);

// function getId() {
//   wishes.forEach((item, index) => {
//     item.id = `card-${index + 1}`;
//   });
// }

// getId();
