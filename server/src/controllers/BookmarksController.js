const model = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const { songId, userId } = req.query
      const bookmark = await model.bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })

      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured tyring to fetch the bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const { songId, userId } = req.body
      const bookmark = await model.bookmark.findOne({
        where: {
          SongId: songId,
          UseId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark'
        })
      }

      const newBookmark = await model.bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured tyring to create the bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const { bookmarkId } = req.params
      const bookmark = await model.bookmark.findOne(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured tyring to delete the bookmark'
      })
    }
  }
}
