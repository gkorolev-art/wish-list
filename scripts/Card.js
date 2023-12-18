class Card {
  constructor(data, templateSelector) {
    this.name = data.name;
    this.link = data.link;
    this.imageLink = data.imageLink;
    this.price = data.price;
    this.templateSelector = templateSelector;
  }

  getTemplate() {
    const cardElement = document
      .querySelector(this.templateSelector)
      .content.querySelector(".item")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this.cardElement = this.getTemplate();
    this.nameNewCard = this.cardElement.querySelector(".item__heading");
    this.linkNewCard = this.cardElement.querySelector(".item__link");
    this.pictureNewCard = this.cardElement.querySelector(".item__picture");
    this.priceNewCard = this.cardElement.querySelector(".item__price");

    this.nameNewCard.textContent = this.name;
    this.linkNewCard.href = this.link;
    this.pictureNewCard.src = this.imageLink;
    this.pictureNewCard.alt = this.name;
    this.priceNewCard.textContent = this.price;

    return this.cardElement;
  }
}

export { Card };
