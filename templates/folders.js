const foldersList = (folders = {}) => {
  let folderKeys = Object.keys(folders)

  return folderKeys.reduce((str, folderID) => {
    return str += `<li>${folders[folderID]}</li>`
  }, '')
}

module.exports = foldersList
