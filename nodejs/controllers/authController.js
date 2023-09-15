const authController = {
  signin: async (req, res) => {
    try {
      res.json({ message: "login" });
    } catch (error) {
      console.log(error);
    }
  },
  signup: async (req, res) => {
    try {
      res.json({ message: "signup" });
    } catch (error) {
      console.log(error);
    }
  },
  resetPassword: async (req, res) => {
    try {
      res.json({ message: "resetPassword" });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = authController;
