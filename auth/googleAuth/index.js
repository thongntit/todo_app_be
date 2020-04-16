const User = require("../../models").User;
var jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  let tokenId = req.body.tokenId;
  if (!tokenId) {
    res.status(400).send({
      message: "tokenId not found!",
    });
  } else {
    let data = jwt.decode(tokenId);
    try {
      const foundUser = await User.findOne({
        where: {
          email: data.email,
        },
      }).catch((error) =>
        res.status(500).send({
          message: error.message || "Some error occurred while finding user",
        })
      );

      if (!foundUser) {
        User.create({
          username: data.name,
          email: data.email,
          authenticationString: tokenId,
        })
          .then((user) => {
            req.session.user = foundUser;
            res.status(201).send(user);
          })
          .catch((error) =>
            res.status(500).send({
              message:
                error.message || "Some error occurred while creating user",
            })
          );
      } else {
        await foundUser
          .update({ authenticationString: tokenId })
          .catch((error) =>
            res.status(500).send({
              message:
                error.message || "Some error occurred while updating user",
            })
          );
        req.session.user = foundUser;
        res.status(200).send(foundUser);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
