const foldersList = (folders = {}) => {
  let folderKeys = Object.keys(folders)

  return folderKeys.reduce((str, folderID) => {
    return str += `
      <li>
        <h3>${folders[folderID]}</h3>
        <button type="button" class="folder-drop-down">Drop Down</button>
        <form>
          <label>Add a URL that you would like to have shortened:</label>
          <input class="url-input" type="url" placeholder="www.examplesite.com"></input>
          <button class="url-submit-button" type="submit">Submit</button>
        </form>
      </li>
    `
  }, '')
}

module.exports = foldersList
