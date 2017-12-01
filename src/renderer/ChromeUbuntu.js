export function getMusic () {
  let chromeBookmarks = '/home/max/.config/google-chrome/Default/Bookmarks'
  const fs = require('fs')
  let bookmark
  let musicBookmark

  musicBookmark = fs.readFileSync(chromeBookmarks, 'utf8', function (err, data) {
    if (err) throw err
    bookmark = JSON.parse(data)
    return bookmark.roots.bookmark_bar.children[0].children
  })
  return musicBookmark
}
