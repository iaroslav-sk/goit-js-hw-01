const credits = 23580;
const pricePerDroid = 300;
let totalPrice = 0;
let balance = 0;
let message;

const quantityDroid = prompt(
  'Введите количество дроидов которое вы хотите преобрести!',
);
totalPrice = quantityDroid * pricePerDroid;

if (quantityDroid === null) {
  message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else if (totalPrice < credits) {
  balance = credits - totalPrice;
  message = `Вы купили  ${quantityDroid} дроидов, на счету осталось ${balance} кредитов.`;
}
alert(message);
