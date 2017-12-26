<template>
  <Row type="flex" justify="center">
    <div id="song-search">
      <Row>
        <Input v-model="value" @on-keyup="searchResult" placeholder="Find Songs" style="width: 80%"></Input>
        <Button @click="faqModal = true">?</Button>
        <Modal
          v-model="faqModal"
          title="Searching Tips">
          <h4>For best results try searching with a wildcard at the end of the query.  Like: 'myText*</h4>
          <p>Add a Wildcard: query*</p>
          <p>Boost: query1^10 query2</p>
          <p>Fuzzy Match: query~1</p>
          <div slot="footer"></div>
        </Modal>
      </Row>
    </div>
    <div id="song-column">
      <ul>
        <li v-if="value.length > 0">
          <song-tile v-for="song in queryResults"
            :key="song.id"
            :id="song.id"
            :name="song.name"
            :url="song.url"
            @click.native="choose(song)"
            :selectedSong="selectedSong"
          >
          </song-tile>
        </li>
        <li v-else>
          <song-tile v-for="song in songs[selectedPlaylist.id].children"
            :key="song.id"
            :id="song.id"
            :name="song.name"
            :url="song.url"
            @click.native="choose(song)"
            :selectedSong="selectedSong"
          >
          </song-tile>
        </li>
      </ul>
    </div>
  </Row>
</template>

<script>
  import SongTile from './SongTile'
  import { makeIndex } from '../ChromeUbuntu'
  
  export default {
    name: 'song-queue',
    components: { SongTile },
    props: ['bookmarkFolders', 'index'],
    data () {
      return {
        songs: this.bookmarkFolders.bookmark_bar.children,
        value: '',
        queryResults: [],
        faqModal: false,
        selectedPlaylist: {},
        selectedSong: {}
      }
    },
    created () {
      this.$bus.$on('selectedPlaylist', this.updateSelectedPlaylist)
      this.$bus.$on('videoEnded', this.nextSong)
    },
    methods: {
      searchResult () {
        let songIndex = makeIndex(this.songs[this.selectedPlaylist.id].children)
        let foundSongs = songIndex.search(this.value)
        let RefsToShow = foundSongs.map(x => x.ref)
        let results = []

        this.songs[this.selectedPlaylist.id].children.forEach(function (song) {
          if (RefsToShow.length > 0) {
            RefsToShow.forEach(function (ref) {
              if (song.id === ref) {
                results.push(song)
              }
            })
          }
        })
        this.queryResults = results
      },
      updateSelectedPlaylist (selected) {
        this.selectedPlaylist = selected
      },
      choose (song) {
        this.selectedSong = song
        this.$bus.$emit('selectedSong', this.selectedSong)
      },
      nextSong () {
        let curSong
        let nextSong
        if (this.queryResults.length > 0) {
          curSong = this.queryResults.indexOf(this.selectedSong)
          nextSong = curSong + 1
          if (nextSong > this.queryResults.length) {
            this.selectedSong = {}
            return
          } else {
            this.selectedSong = this.queryResults[nextSong]
          }
        } else {
          curSong = this.songs[this.selectedPlaylist.id].children.indexOf(this.selectedSong)
          nextSong = curSong + 1
          if (nextSong > this.songs[this.selectedPlaylist.id].children.length) {
            this.selectedSong = {}
            return
          } else {
            this.selectedSong = this.songs[this.selectedPlaylist.id].children[nextSong]
          }
        }
        this.$bus.$emit('selectedSong', this.selectedSong)
      }
    }
  }
</script>

<style>
#song-column {
  width: 90%;
  height: 89vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 1%;
  padding-bottom: 15%;
}

#song-search {
    padding-top: 1%;
    padding-bottom: 1%;
    width: 55%;
}
</style>
