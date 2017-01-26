const urlTemplate = require('./urlTable')

const foldersList = (folders = {}) => {
  let folderKeys = Object.keys(folders)

  return folderKeys.reduce((str, folderID) => {
    return str += (`
      <li>
        <h3>${folders[folderID].folderName}</h3>
        <button type="button" class="folder-drop-down">Drop Down</button>
        <form class="url-form" id="${folderID}">
          <label>Add a URL that you would like to have shortened:</label>
          <input class="url-input" type="url" value="http://"></input>
          <button class="url-submit-button" type="submit">Submit</button>
        </form>
        <table id="table-${folderID}">
          <tr class="table-header">
           <th>URL</th>
           <th>Shortened URL</th>
         </tr>
         ${urlTemplate(folders[folderID].urls)}
        </table>
      </li>
    `)
  }, '')
}

module.exports = foldersList
