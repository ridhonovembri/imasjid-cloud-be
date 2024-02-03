const masjidMarquee = require("../services/MasjidMarqueeService");

exports.findAll = (req, res) => {
  masjidMarquee
    .findAll()
    .then((result) => {
      // console.log(result)
      res.status(200).send(JSON.stringify(result));
    })
    .catch({});
};

exports.findByPk = (req, res) => {
  const id = req.params.id;

  masjidMarquee
    .findByPk(id)
    .then((result) => {
      // console.log(result)
      res.status(200).send(JSON.stringify(result));
    })
    .catch({});
};

exports.post = (req, res) => {
  // console.log('req controller', req)
  masjidMarquee
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

  masjidMarquee
    .update(id, req.body)
    .then((result) => {
      res.status(200).send({ message: "Row Has Been Updated", status: true });
    })
    .catch({});
};

exports.delete = (req, res) => {
  const id = req.params.id;

  masjidMarquee
    .delete(id)
    .then((result) => {
      res.status(200).send({ message: "Row Has Been Deleted", status: true });
    })
    .catch({});
};
