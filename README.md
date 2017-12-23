# local-music-manager
Manage and play songs in your bookmarks, locally.

## Setup and Use
Only Chrome bookmarks are currently supported.  Only unnested bookmark folders from your Bookmarks Bar will show up. 

## Installing and Running Dev Version
```
# clone the repo
git clone https://github.com/maxdobeck/local-music-player.git

# install 
yarn # or npm install

# run dev version
yarn dev # or npm run dev
```
Todo
----
- [ ] Link to youtube pages
- [ ] iview modals for tiles
- [ ] DRY reusable tile components, pass props to make changes to icon and title
- [x] ~~Add Vuex for updating cur-playlist and cur-song~~ Just had to use a global event bus!
