const CustomAPIError = require("../errors/custom-error");

const getLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("yo!! giff me correct pass and name", 400);
  }
  res.send(req.body);
};

const getDashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ayon`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { getDashboard, getLogin };
