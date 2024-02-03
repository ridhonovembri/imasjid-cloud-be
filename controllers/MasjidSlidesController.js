const masjidSlides = require("../services/MasjidSlidesService");

exports.findAll = (req, res) => {
  masjidSlides
    .findAll()
    .then((result) => {
      // console.log(result)
      res.status(200).send(JSON.stringify(result));
    })
    .catch({});
};

exports.findByPk = (req, res) => {
  const id = req.params.id;

  masjidSlides
    .findByPk(id)
    .then((result) => {
      // console.log(result)
      res.status(200).send(JSON.stringify(result));
    })
    .catch({});
};

exports.findByName = (req, res) => {
  const name = req.params.name;
  // console.log(name)

  masjidSlides
    .findByName(name)
    .then((result) => {
      // console.log(result)
      res.status(200).send(JSON.stringify(result));
    })
    .catch({});
};

exports.getSlides = (req, res) => {
  const name = req.params.name;
  // console.log(name)

  masjidSlides
    .getSlides()
    .then((result) => {
      // console.log(result)
      res.status(200).send(JSON.stringify(result));
    })
    .catch({});
};

exports.post = (req, res) => {
  masjidSlides
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

  masjidSlides
    .update(id, req.body)
    .then((result) => {
      res.status(200).send({ message: "Row Has Been Updated", status: true });
    })
    .catch({});
};

exports.delete = (req, res) => {
  const id = req.params.id;

  masjidSlides
    .delete(id)
    .then((result) => {
      res.status(200).send({ message: "Row Has Been Deleted", status: true });
    })
    .catch({});
};
