const openDialogBtn = document.getElementById('openDialogBtn');
const sendEmailDialog = document.getElementById('sendEmailDialog');
const cancelSendBtn = document.getElementById('cancelSendBtn');
const to = document.getElementById('to');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const service = document.getElementById('form-select');


openDialogBtn.addEventListener('click', () => {
  sendEmailDialog.showModal();
});


cancelSendBtn.addEventListener('click', () => {
  sendEmailDialog.close();
});


sendEmailForm.addEventListener('submit', async (event) => {
  event.preventDefault();
 await Post(to.value,subject.value,message.value,service.value)

})

async function Post(to, subject, message, service) {
    fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to, subject, message, service }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        sendEmailDialog.close();
        alert(data.message);
      })
      .catch(error => console.error('Error:', error));
}
