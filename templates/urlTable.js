const urlTemplate = (urls = {}) => {
  const urlKeys = Object.keys(urls)

  return urlKeys.reduce((str, urlID) => {
    return str += (`
      <tr>
        <td><a href="${urls[urlID][0]}">${urls[urlID][0]}</a></td>
        <td><a href="${urls[urlID][0]}">${urls[urlID][1]}</a></td>
      </tr>
    `)
  }, '')
}

module.exports = urlTemplate
