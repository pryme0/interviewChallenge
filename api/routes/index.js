const router = require("express").Router();
const getVideos = require("../service/videoService");

router.get("/get-videos/:page", (req, res) => {
  try {
    console.log(req.params.page)
    const result = getVideos(parseInt(req.params.page));
    res.status(200).json(result);
  } catch (error) {
    error.statusCode
      ? res.status(error.statusCode).json({ error: error })
      : res.status(500).json({ error: error });
  }
});

module.exports = router;
