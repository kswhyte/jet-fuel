const urlTemplate = (urls = {}) => {
  const urlKeys = Object.keys(urls)

  return urlKeys.reduce((str, urlID) => {
    return str += (`
      <tr>
        <td>${urls[urlID][0]}</td>
        <td>${urls[urlID][1]}</td>
      </tr>
    `)
  }, '')
}

module.exports = urlTemplate
