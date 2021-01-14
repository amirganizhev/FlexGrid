let message = document.querySelector('.subscription-message');
let form = document.querySelector('.subscription');
let email = document.querySelector('.subscription-email');

form.onsubmit = function(evt) {
  evt.preventDefault(); // Инструкция ниже отменяет отправку данных
  message.textContent = 'Адрес ' + email.value + ' добавлен в список получателей рассылки.';
};