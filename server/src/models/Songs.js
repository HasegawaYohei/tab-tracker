module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('song', {
    title: {
      type: DataTypes.STRING,
      unique: true
    },
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImage: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT
  })

  return Song
}
