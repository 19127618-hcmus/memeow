const memeModel = require('../model/meme');
const userModel = require('../model/user');

exports.paginationMeme = async (perPage, page) => {
 
  return await memeModel.find({})
  .skip((perPage*page)-perPage)
  .limit(perPage)
  .lean();
 
}
exports.countMeme = async () => {
  return await memeModel.countDocuments();
}