$('.submit-button').on('click', (e) => {
  e.preventDefault()
  const folderName = $('#URL').val()

  $.post('/api/folders/', { folderName })
    .then(res => console.log(res))
    .catch(err => console.log(err))
})
