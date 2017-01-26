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

$(document).on('submit', '.url-form', (e) => {
  e.preventDefault()
  const uri = e.target.baseURI
  console.log(uri)
  const url = e.target[0].value
  const folderID = e.target.id
  e.target[0].value = ''

  $.post(`/api/folders/${folderID}`, { url, uri })
    .then(res => console.log('res', res))
    .catch(err => console.log('err', err))
});
