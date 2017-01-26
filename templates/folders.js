const urlTemplate = require('./urlTable')

const foldersList = (folders = {}) => {
  console.log(folders);
  // let folderKeys = Object.keys(folders)
  return folders.reduce((str, folder) => {
    return str += (`
      <li>
        <h3>${folder.name}</h3>
        <form class="url-form" id="${folder.id}">
          <label>Add a URL that you would like to have shortened:</label>
          <input class="url-input" type="url" value="http://"></input>
          <button class="url-submit-button" type="submit">Submit</button>
        </form>
        <table id="table-${folder.id}">
          <tr class="table-header">
           <th>URL</th>
           <th>Shortened URL</th>
         </tr>
         ${urlTemplate(folder.urls)}
        </table>
      </li>
    `)
  }, '')
}

module.exports = foldersList
