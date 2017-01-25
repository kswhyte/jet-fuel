// const fetch = require('isomorphic-fetch').fetch

const postFolderName = (folderName) => {
  console.log('folderName', folderName)
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
}

module.exports = postFolderName
