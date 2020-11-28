const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const passwordInput = prompt('Введите пароль :');

if (passwordInput === null) {
  message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD === passwordInput) {
  message = 'Добро пожаловать!';
} else if (ADMIN_PASSWORD !== passwordInput) {
  message = 'Доступ запрещён, неверный пароль!';
}

alert(message);
