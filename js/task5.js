let postPrice;
let country = prompt('Введите страну доставки!').toLowerCase();

switch (country) {
  case 'китай':
    postPrice = '100';
    break;
  case 'чили':
    postPrice = '250';
    break;

  case 'австралия':
    postPrice = '170';
    break;

  case 'индия':
    postPrice = '80';
    break;

  case 'ямайка':
    postPrice = '120';
    break;

  default:
    alert('В вашей стране доставка не доступна!');
}

alert(`Стоимость достаки - ${postPrice} кредитов!`);
