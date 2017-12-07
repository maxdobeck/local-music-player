export function getMusic () {
  let chromeBookmarks = '/home/max/.config/google-chrome/Default/Bookmarks'
  const fs = require('fs')
  let musicBookmark

  musicBookmark = fs.readFileSync(chromeBookmarks, 'utf8', function (err, data) {
    if (err) throw err
    let bookmark = JSON.parse(data)
    // bookmark. would return Music bookmarks
    return bookmark
  })
  console.log(musicBookmark)
  return JSON.parse(musicBookmark).roots
}
