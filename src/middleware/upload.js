// STEP 2
const multer = require('multer')

module.exports = multer({
  storage: multer.memoryStorage(),
})