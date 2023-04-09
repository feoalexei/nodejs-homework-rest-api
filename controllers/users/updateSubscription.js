const { controllerWrapper } = require('../../utils');
const { User } = require('../../models');

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(_id, req.body, { new: true });
  console.log(_id);
  console.log(req.body);
  res.json({
    status: 'success',
    code: 200,
    message: 'Subscription type was updated',
    data: {
      result,
    },
  });
};

module.exports = controllerWrapper(updateSubscription);
