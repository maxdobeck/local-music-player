export function getMusic () {
  let chromeBookmarks = '/home/max/.config/google-chrome/Default/Bookmarks'
  const fs = require('fs')
  let musicBookmark

  musicBookmark = fs.readFileSync(chromeBookmarks, 'utf8', function (err, data) {
    if (err) throw err
    let bookmark = JSON.parse(data)
    // bookmark.bookmark_bar.children[0].children would return all children in Music folder
    return bookmark
  })
  // console.log(musicBookmark)

  return JSON.parse(musicBookmark).roots
}

export function makeIndex (data) {
  const lunr = require('lunr')

  var idx = lunr(function () {
    this.field('name')
    this.ref('id')

    data.forEach(function (song) {
      this.add(song)
    }, this)
  })
  // idx.add(data) add in idx func instead
  return idx.search('Tall Tall')
}
