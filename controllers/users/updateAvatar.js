const path = require('path');
const fs = require('fs/promises');
const Jimp = require('jimp');

const { controllerWrapper } = require('../../utils');
const { User } = require('../../models');

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars');

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;

  const tempDir = path.join(tempUpload, '../');
  const filename = `${_id}_${originalname}`;
  const tempUploadResized = path.join(tempDir, filename);
  const resultUpload = path.join(avatarsDir, filename);

  const avatar = await Jimp.read(tempUpload);
  await avatar.resize(250, 250);
  await avatar.writeAsync(tempUploadResized);

  const avatarURL = path.join('avatars', filename);

  await fs.rename(tempUploadResized, resultUpload);
  await fs.unlink(tempUpload);

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    status: 'success',
    code: 200,
    message: 'Avatar was changed',
    data: {
      avatarURL,
    },
  });
};

module.exports = controllerWrapper(updateAvatar);
