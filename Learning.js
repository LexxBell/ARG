const sendButton = document.querySelector('button');
const texts = document.querySelectorAll('div');
const ul = document.querySelector('ul');
const lastRow = document.getElementsByClassName('lastrow');



sendButton.addEventListener('click', () => {
   const li = document.createElement('li');
   ul.after(li);
   ul.removeChild(ul.firstChild);
});
