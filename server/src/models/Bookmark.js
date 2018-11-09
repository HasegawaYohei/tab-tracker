module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('bookmark', {})

  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.user)
    Bookmark.belongsTo(models.song)
  }

  return Bookmark
}
