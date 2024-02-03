const masjid = require("../services/MasjidConfigService");

exports.findAll = (req, res) => {
  masjid
    .findAll()
    .then((result) => {
      res.status(200).send(JSON.stringify(result));
    })
    .catch({});
};

exports.findOne = (req, res) => {
  masjid
    .findOne()
    .then((result) => {
      res.status(200).send(JSON.stringify(result));
    })
    .catch({});
};

exports.findByPk = (req, res) => {
  const id = req.params.id;

  masjid
    .findByPk(id)
    .then((result) => {
      res.status(200).send(JSON.stringify(result));
    })
    .catch({});
};

exports.post = (req, res) => {
  masjid
    .create(req.body)
    .then((result) => {
      res.status(200).send({ message: "Row Has Been Added", status: true });
    })
    .catch({});
};

exports.update = (req, res) => {
  const id = req.params.id;

  // console.log('BE: id', id)
  // console.log('BE: req.body', req.body)

  masjid
    .update(id, req.body)
    .then((result) => {
      res.status(200).send({ message: "Row Has Been Updated", status: true });
    })
    .catch({});
};

exports.delete = (req, res) => {
  const id = req.params.id;

  masjid
    .delete(id)
    .then((result) => {
      res.status(200).send({ message: "Row Has Been Deleted", status: true });
    })
    .catch({});
};
