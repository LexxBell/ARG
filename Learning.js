const sendButton = document.querySelector('button');
const texts = document.querySelectorAll('div');
const ul = document.querySelector('ul');
const form = document.querySelector('.textarea');
const userMessage = document.querySelector('#usermessage');

const blueMsg = ['Test Blue one','Test Blue two','Test Blue three',
                 'Test Blue four','Test Blue five' ];

const greenMsg = ['Test Green one','Test green two','Test Green three',
                  'Test Green four', 'Test Green five',];

/* Count the total messages so we don't delete older messages
 unless the screen is full already */
const MAX_MESSAGES = 15;
var totalMsgs = 0;
var i = 0;


form.addEventListener('submit', e => {
   e.preventDefault();
   sendMessage();
})

function sendMessage() {
   
   if ( totalMsgs >= 4) {
      ul.removeChild(ul.firstChild);
   }
   const pi = document.createElement('p');
   pi.textContent = userMessage.value;
   ul.append(pi);

   if ( totalMsgs >= 4) {
      ul.removeChild(ul.firstChild);
   }
   const li = document.createElement('li');
   li.textContent = blueMsg[i];
   setTimeout(function() {
      ul.append(li);
      }, 1000);

   i++;
   totalMsgs+=2;
}




