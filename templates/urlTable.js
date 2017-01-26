const urlTemplate = (urls = {}) => {
  const urlKeys = Object.keys(urls)

  return urlKeys.reduce((str, urlID) => {
    return str += (`
      <tr>
        <td><a href="${urls[urlID].url}">${urls[urlID].url}</a></td>
        <td><a href="${urls[urlID].url}">${urls[urlID].shortURL}</a></td>
      </tr>
    `)
  }, '')
}

module.exports = urlTemplate
