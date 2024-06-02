const ethers = require("ethers");

async function authController(req, res, next) {
  try {
    const { signature } = req.body;

    if (!signature) {
      throw new Error("No signature");
    }

    const recoveredAddress = ethers.utils.verifyMessage(
      "Sign to authenticate on Pharmacuetical Supply Chain System",
      signature
    );

    console.log(recoveredAddress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { authController };
