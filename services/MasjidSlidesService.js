const fs = require("fs/promises");
const postgre = require("../db");

exports.findAll = async () => {
  try {
    const { rows } = await postgre.query(
      'SELECT Id as id, sequence as "Sequence", img_name as "ImgName", img_desc as "ImgDesc", img_source as "ImgSource" FROM masjid_slides ORDER BY id'
    );
    // console.log("rows", rows);
    return rows;
  } catch (e) {
    throw e;
  }
};

exports.findByPk = async (id) => {
  try {
    const sql =
      'SELECT Id as id, sequence as "Sequence", img_name as "ImgName", img_desc as "ImgDesc", img_source as "ImgSource" FROM masjid_slides where id = $1';

    const { rows } = await postgre.query(sql, [id]);
    // console.log("rows", rows)
    return rows;
  } catch (e) {
    throw e;
  }
};

exports.findByName = async (name) => {
  try {
    const sql =
      'SELECT Id as id, sequence as "Sequence", img_name as "ImgName", img_desc as "ImgDesc", img_source as "ImgSource" FROM masjid_slides where img_name = $1';

    const { rows } = await postgre.query(sql, [name]);
    // console.log("rows", rows)
    return rows;
  } catch (e) {
    throw e;
  }
};

exports.getSlides = async () => {
  try {
    const { rows } = await postgre.query(
      'SELECT Id as id, sequence as "Sequence", img_name as "ImgName", img_desc as "ImgDesc", img_source as "ImgSource" FROM masjid_slides ORDER by id'
    );
    // console.log("rows", rows);
    return rows;
  } catch (e) {
    throw e;
  }
};

exports.create = async (data) => {
  try {
    const { Sequence, ImgName, ImgDesc, ImgSource } = data;

    const sql =
      "INSERT INTO masjid_slides(sequence, img_name, img_desc, img_source) VALUES($1, $2, $3, $4) RETURNING *";

    const { rows } = await postgre.query(sql, [Sequence, ImgName, ImgDesc, ImgSource]);
    return rows[0];

  } catch (e) {
    throw e;
  }
};

exports.update = async (id, data) => {
  try {
    const { Sequence, ImgName, ImgDesc, ImgSource } = data;

    const sql =
      "UPDATE masjid_slides set sequence = $1, img_name = $2, img_desc = $3, img_source = $4 where id = $5 RETURNING *";

    const { rows } = await postgre.query(sql, [Sequence, ImgName, ImgDesc, ImgSource, id]);

    return rows[0];
  } catch (e) {
    throw e;
  }
};

exports.delete = async (id) => {
  //   console.log("destroy==>", id);
  try {
    const sql = "DELETE FROM masjid_slides where id = $1 RETURNING *";
    const { rows } = await postgre.query(sql, [id]);

    return rows[0];
  } catch (e) {
    throw e;
  }
};
