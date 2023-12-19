const wishes = [
  {
    name: "Ароматический диффузор BAGO home",
    link: "https://bagohome.com/catalog/aromaticheskie_diffuzory/sibirskaya-sosna-aromaticheskiy-diffuzor-/",
    imageLink:
      "https://bagohome.com/upload/resize_cache/webp/iblock/24d/vzksl2x9rqfx21dv3rfkwwprrh7r9mpz.webp",
    price: "1 850 ₽",
    id: "",
  },
  {
    name: "Держатель для туалетной бумаги",
    link: "https://ozon.ru/t/ApQyAN5",
    imageLink: "https://ir.ozone.ru/s3/multimedia-x/wc1000/6625492737.jpg",
    price: "4 074 ₽",
    id: "",
  },
  {
    name: "Ершик для унитаза LANGBERGER",
    link: "https://ozon.ru/t/8VWXee5",
    imageLink: "https://ir.ozone.ru/s3/multimedia-k/wc1000/6625492760.jpg",
    price: "13 807 ₽",
    id: "",
  },
  {
    name: "Комплект постельного белья Stripe 220x200",
    link: "https://www.askona.ru/tekstil/postelnoe-beljo/askona-stripe-shampan.htm?SELECTED_HASH_SIZE=220x200-25db99477ba628010f02d7604278c64e",
    imageLink:
      "https://www.askona.ru/_next/image?url=https%3A%2F%2Fwww.askona.ru%2Fupload%2Fcatalog_product_images%2Ftekstil%2Faskona-stripe-shampan%2Faskona-stripe-shampan_1.webp&w=1920&q=75",
    price: "9 907 ₽",
    id: "",
  },
  {
    name: "Простыня на резинке Askona Comfort 140x200",
    link: "https://www.askona.ru/tekstil/postelnoe-beljo/comfort-shampan.htm?SELECTED_HASH_SIZE=140x200-f31354d6a581d0e5fec502eca8f49d2d",
    imageLink:
      "https://www.askona.ru/_next/image?url=https%3A%2F%2Fwww.askona.ru%2Fupload%2Fcatalog_product_images%2Ftekstil%2Fcomfort-shampan%2Fcomfort-shampan_1.webp&w=1920&q=75",
    price: "4 728 ₽",
    id: "",
  },
  {
    name: "Постельное белье Comfort Cotton 220x200",
    link: "https://www.askona.ru/tekstil/postelnoe-beljo/comfort-cotton-svetlo-seryy.htm?SELECTED_HASH_SIZE=220x200-25db99477ba628010f02d7604278c64e",
    imageLink:
      "https://www.askona.ru/_next/image?url=https%3A%2F%2Fwww.askona.ru%2Fupload%2Fcatalog_product_images%2Ftekstil%2Fcomfort-cotton-svetlo-seryy%2Fcomfort-cotton-svetlo-seryy_4.webp&w=1920&q=75",
    price: "4 990 ₽",
    id: "",
  },
  {
    name: "Простыня на резинке Comfort Cotton 140x200",
    link: "https://www.askona.ru/tekstil/postelnoe-beljo/prostyn-comfort-cotton-svetlo-seryy.htm?SELECTED_HASH_SIZE=140x200-f31354d6a581d0e5fec502eca8f49d2d",
    imageLink:
      "https://www.askona.ru/_next/image?url=https%3A%2F%2Fwww.askona.ru%2Fupload%2Fcatalog_product_images%2Ftekstil%2Fprostyn-comfort-cotton-svetlo-seryy%2Fprostyn-comfort-cotton-svetlo-sery_1.webp&w=1920&q=75",
    price: "2 490 ₽",
    id: "",
  },
  {
    name: "Диспенсер для бумажных полотенец",
    link: "https://ozon.ru/t/3WrQDzz",
    imageLink: "https://ir.ozone.ru/s3/multimedia-x/wc1000/6716314761.jpg",
    price: "380 ₽",
    id: "",
  },
  {
    name: "Смеситель для кухни IDDIS",
    link: "https://ozon.ru/t/kY8P741",
    imageLink: "https://ir.ozone.ru/s3/multimedia-t/wc1000/6491772845.jpg",
    price: "18 527 ₽",
    id: "",
  },
];

function getId() {
  wishes.forEach((item, index) => {
    item.id = `card-${index + 1}`;
  });
}

getId();

export { wishes };
