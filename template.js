// const postFolderName = require('./postFolderName')

const indexTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Jet Fuel</title>
    <link rel="stylesheet" type="text/css" href="./styles.css">
    <link href="https://fonts.googleapis.com/css?family=Arsenal|Lato|Open+Sans" rel="stylesheet">
  </head>
  <body>
    <h1 class="title">Jet Fuel</h1>
    <form onSubmit="postFolderName(e)">
      <label for="folder-label">Add a new folder to house similar URLs:</label>
      <input id="folder-input" placeholder="Full URL folder..."></input>
      <button class="submit-button" type="submit">Submit</button>
    </form>
  </body>
  <script src="reload/reload.js"></script>
  <script src="/scripts.js"></script>
</html>
`

module.exports = indexTemplate
