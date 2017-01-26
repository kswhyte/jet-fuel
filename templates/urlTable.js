const urlTemplate = (urls = []) => {
  console.log(urls);
  return urls.reduce((str, urlPackage) => {
    return str += (`
      <tr>
        <td><a href="${urlPackage.url}">${urlPackage.url}</a></td>
        <td><a href="${urlPackage.url}">${urlPackage.shortened}</a></td>
      </tr>
    `)
  }, '')
}

module.exports = urlTemplate
