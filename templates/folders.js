const foldersList = (folders = {}) => {
  let folderKeys = Object.keys(folders)

  return folderKeys.map(folderID => {
    return `<li>${folders[folderID]}<li>`
  })
}

module.exports = foldersList
