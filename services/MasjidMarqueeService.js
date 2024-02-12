const fs = require("fs/promises");
const postgre = require("../db");

exports.findAll = async () => {
  try {
    const { rows } = await postgre.query(
      'SELECT Id as "Id", marquee_text as "MarqueeText" FROM masjid_marquee ORDER by id'
    );
    // console.log("rows", rows);
    return rows;
  } catch (e) {
    throw e;
  }
};

exports.findOne = async () => {
  try {
    const { rows } = await postgre.query(
      'SELECT Id as "Id", marquee_text as "MarqueeText" FROM masjid_marquee LIMIT 1 '
    );
    // console.log("rows", rows)
    return rows[0];
  } catch (e) {
    throw e;
  }
};

exports.findByPk = async (id) => {
  try {
    const sql =
      'SELECT Id as "Id", marquee_text as "MarqueeText" FROM masjid_marquee where id = $1';

    const { rows } = await postgre.query(sql, [id]);
    // console.log("rows", rows)
    return rows[0];
  } catch (e) {
    throw e;
  }
};

exports.create = async (data) => {
  try {
    const { MarqueeText } = data;

    const sql =
      "INSERT INTO masjid_marquee(marquee_text) VALUES($1) RETURNING *";

    const { rows } = await postgre.query(sql, [MarqueeText]);

    // console.log('rows', rows[0])

    return rows[0];
  } catch (e) {
    throw e;
  }
};

exports.update = async (id, data) => {
  // console.log('id', id)
  // console.log('data', data)
  try {
    const { MarqueeText } = data;

    const sql =
      "UPDATE masjid_marquee set marquee_text = $1 where id = $2 RETURNING *";

    const { rows } = await postgre.query(sql, [
      MarqueeText,
      id,
    ]);

    return rows[0];
  } catch (e) {
    throw e;
  }
};

exports.delete = async (id) => {
  try {
    // console.log("delete id", id);
    const sql = "DELETE FROM masjid_marquee where id = $1 RETURNING *";
    const { rows } = await postgre.query(sql, [id]);
    // console.log("rows", rows[0]);

    return rows[0];
  } catch (e) {
    throw e;
  }
};
