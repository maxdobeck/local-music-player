# local-music-manager
Manage and play songs in your bookmarks, locally.

## Setup and Use
Only Chrome bookmarks are currently supported.  Only unnested bookmark folders from your Bookmarks Bar will show up.  Currently only bookmarks to Youtube are supported.

## Installing and Running Dev Version
```
# clone the repo
git clone https://github.com/maxdobeck/local-music-player.git

# install 
yarn # or npm install

# run dev version
yarn dev # or npm run dev
```
Todo Prerelease
----
- [ ] Pretty link to song url from card
- [ ] iview modals for tiles
- [ ] DRY reusable tile components, pass props to make changes to icon and title
- [x] ~~Add Vuex for updating cur-playlist and cur-song~~ Just had to use a global event bus!
- [x] Click a song to autoplay a youtube video
- [ ] Global key commands for Previous, Next, and Pause song
- [ ] Soundcloud support
- [x] Autoplay next song in queue
- [x] Return to starting state when last song is played
- [ ] Watch bookmark file for changes
- [ ] Normalize bookmark file read for all systems
- [ ] Support firefox bookmarks
- [ ] Support edge bookmarks
- [ ] Support Nested Playlists
- [ ] Test search responsiveness at 500 value iterations up to 10,000
- [ ] Scrollspy for top,botom, and current song
