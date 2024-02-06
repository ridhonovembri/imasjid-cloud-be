const fs = require("fs/promises");
const postgre = require("../db");

exports.findAll = async () => {
  try {
    const { rows } = await postgre.query(
      'SELECT Id as id, hadist_content as "HadistContent", hadist_from as "HadistFrom" FROM masjid_hadist ORDER BY id'
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
      'SELECT Id as id, hadist_content as "HadistContent", hadist_from as "HadistFrom" FROM masjid_hadist LIMIT 1 '
    );
    // console.log("rows", rows)
    return rows[0];
  } catch (e) {
    throw e;
  }
};

exports.findRandom = async () => {
  try {
    const { rows } = await postgre.query(
      'SELECT Id as id, hadist_content as "HadistContent", hadist_from as "HadistFrom" FROM masjid_hadist ORDER BY RANDOM() LIMIT 1 '
    );
    // console.log("rows", rows)
    return rows;
  } catch (e) {
    throw e;
  }
};

exports.findByPk = async (id) => {
  try {
    const sql =
    'SELECT Id as id, hadist_content as "HadistContent", hadist_from as "HadistFrom" FROM masjid_hadist where id = $1';

    const { rows } = await postgre.query(sql, [id]);
    // console.log("rows", rows)
    return rows[0];
  } catch (e) {
    throw e;
  }
};

exports.create = async (data) => {
  try {
    const { HadistContent, HadistFrom } = data;

    const sql =
      "INSERT INTO masjid_hadist(hadist_content, hadist_from) VALUES($1, $2) RETURNING *";

    const { rows } = await postgre.query(sql, [HadistContent, HadistFrom]);

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
    const { HadistContent, HadistFrom } = data;

    // console.log('HadistContent', data.HadistContent)
    // console.log('HadistFrom', data.HadistFrom)
    // console.log('id', id)

    const sql =
      "UPDATE masjid_hadist set hadist_content = $1, hadist_from = $2 where id = $3 RETURNING *";

    const { rows } = await postgre.query(sql, [HadistContent, HadistFrom, id]);

    return rows[0];
  } catch (e) {
    throw e;
  }
};

exports.delete = async (id) => {
  try {
    // console.log("delete id", id);
    const sql = "DELETE FROM masjid_hadist where id = $1 RETURNING *";
    const { rows } = await postgre.query(sql, [id]);
    // console.log("rows", rows[0]);

    return rows[0];
  } catch (e) {
    throw e;
  }
};
