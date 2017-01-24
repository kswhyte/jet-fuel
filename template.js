const indexTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Jet Fuel</title>
  </head>
  <body>
    <h1>Jet Fuel</h1>
    <section class="folder-form">
      <form type="submit">
        <label for="URL">Add a new folder to house similar URLs:</label>
        <input id="URL" placeholder="Full URL folder..."></input>
        <button class="submit-button">Submit</button>
      </form>
    </section>
  </body>
  <script src="reload/reload.js"></script>
  <script src="/scripts.js"></script>
</html>
`

module.exports = indexTemplate
