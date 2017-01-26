$(document).ready(() => {
  $.get('/api/folders/')
    .then(res => $('#folders-container').html(res))
    .catch(err => console.log(err))
})

$('.folder-submit-button').on('click', (e) => {
  e.preventDefault()

  const folderName = $('#folder-input').val()
  if (!folderName.trim()) { return }

  $('#folder-input').val('')

  $.post('/api/folders/', { folderName })
    .then(res => $('#folders-container').html(res))
    .catch(err => console.log(err))
})
