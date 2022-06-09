const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

// exports.createUser = (req, res) => {
//   console.log(req);

//   const user = new User({
//     email: req.body.email,
//     password: req.body.password,
//   });
//   user
//     .save()
//     .then(() => {
//       res.status(201).json({
//         message: "User saved successfully!",
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// };

// exports.getOneUser = (req, res, next) => {
//   User.findOne({
//     _id: req.params.id,
//   })
//     .then((user) => {
//       res.status(200).json(user);
//     })
//     .catch((error) => {
//       res.status(404).json({
//         error: error,
//       });
//     });
// };

// exports.modifyUser = (req, res, next) => {
//   const user = new User({
//     _id: req.params.id,
//     email: req.body.email,
//     password: req.body.password,
//   });
//   User.updateOne({ _id: req.params.id }, user)
//     .then(() => {
//       res.status(201).json({
//         message: "User updated successfully!",
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// };

// exports.deleteUser = (req, res, next) => {
//   User.deleteOne({ _id: req.params.id })
//     .then(() => {
//       res.status(200).json({
//         message: "Deleted!",
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// };

// exports.getAllUser = (req, res, next) => {
//   User.find()
//     .then((users) => {
//       res.status(200).json(users);
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// };
