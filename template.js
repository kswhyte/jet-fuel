const indexTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Jet Fuel</title>
  </head>
  <body>
    <h1>Jet Fuel</h1>
    <form id="folder-form">
      <label for="URL">Add a new folder to house similar URLs:</label>
      <input id="URL" placeholder="Full URL folder..."></input>
      <button class="submit-button" type="submit">Submit</button>
    </form>
  </body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="reload/reload.js"></script>
  <script src="/scripts.js"></script>
</html>
`

module.exports = indexTemplate
