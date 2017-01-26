$(document).ready(() => {
  console.log('Document Ready');
  $.get('/api/folders/')
    .then(res => {
      console.log('Get request returned');
      $('#folders-container').html(res);
    })
    .catch(err => console.log(err))
})

getFolderUrls(folderId) {
  // get request
}

$.get('/api/folders/')
  .then(foldersJSON => {
    console.log('Get request returned');
    foldersJSON.forEach(folder => {
      $('#folders-container').append(`<li id=folder-${folder.id}>${folder.name}</li>`);
      let folderUrls = getFolderUrls(folder.id);
        
    });
  })
  .catch(err => console.log(err))

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
    .then(res => $(`#table-${folderID}`).append(res))
    .catch(err => console.log('err', err))
});
