const folderForm = document.querySelector('.folder-form')
folderForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const folderName = document.getElementById('URL').value

  fetch('/api/folders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: {
      folderName
    }
  })
  .catch(err => console.log(err))
});
