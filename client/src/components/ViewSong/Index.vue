<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-meta-data :song="song" />
      </v-flex>
      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :song="song"/>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <lyrics :song="song"/>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
import SongsService from '@/services/SongsService'
import SongMetaData from './SongMetaData'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel,
    SongMetaData,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-album {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
