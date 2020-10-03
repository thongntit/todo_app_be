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
    if (!data) {
      res.status(400).send({
        message: "invalid tokenId",
      });
    }
    const now = new Date();
    if (data.exp > now.getTime() / 1000) {
      try {
        User.findOne({
          where: {
            email: data.email,
          },
        })
          .then((foundUser) => {
            if (!foundUser) {
              User.create({
                username: data.name,
                email: data.email,
                authenticationString: tokenId,
              })
                .then((user) => {
                  res.status(201).send(user);
                })
                .catch((error) =>
                  res.status(500).send({
                    message:
                      error.message ||
                      "Some error occurred while creating user",
                  })
                );
            } else {
              foundUser
                .update({ authenticationString: tokenId })
                .then((user) => {
                  res.status(200).send(foundUser);
                })
                .catch((error) =>
                  res.status(500).send({
                    message:
                      error.message ||
                      "Some error occurred while updating user",
                  })
                );
            }
          })
          .catch((error) =>
            res.status(500).send({
              message:
                error.message || "Some error occurred while finding user",
            })
          );
      } catch (error) {
        res.status(500).send(error);
      }
    } else {
      res.status(400).send({
        message: "invalid tokenId",
      });
    }
  }
}
