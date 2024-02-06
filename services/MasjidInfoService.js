const fs = require("fs/promises");
const postgre = require("../db");

exports.findAll = async () => {
  try {
    const { rows } = await postgre.query('SELECT Id as id, masjid_name as "MasjidName", masjid_address as "MasjidAddress", city as "City", province as "Province", bkm_pic as "BkmPic", bkm_phone as "BkmPhone" FROM masjid_info ORDER by id');
    // console.log("rows", rows);
    return rows;

  } catch (e) {
    throw e;
  }
};

exports.findOne = async () => {
  try {
    const { rows } = await postgre.query('SELECT Id as id, masjid_name as "MasjidName", masjid_address as "MasjidAddress", city as "City", province as "Province", bkm_pic as "BkmPic", bkm_phone as "BkmPhone" FROM masjid_info ORDER BY id LIMIT 1 ');
    // console.log("rows", rows)
    return rows[0];

  } catch (e) {
    throw e;
  }
};

exports.findByPk = async (id) => {
  try {

    const sql = 'SELECT Id as id, masjid_name as "MasjidName", masjid_address as "MasjidAddress", city as "City", province as "Province", bkm_pic as "BkmPic", bkm_phone as "BkmPhone" FROM masjid_info where id = $1'

    const { rows } = await postgre.query(sql, [id]);
    // console.log("rows", rows)
    return rows[0];

  } catch (e) {
    throw e;
  }
};

exports.create = async (data) => {
  
  try {

    const { MasjidName, MasjidAddress, City, Province, BkmPic, BkmPhone } =
      data;

    const sql =
      "INSERT INTO masjid_info(masjid_name, masjid_address, city, province, bkm_pic, bkm_phone) VALUES($1, $2, $3, $4, $5, $6) RETURNING *";

    const { rows } = await postgre.query(sql, [
      MasjidName,
      MasjidAddress,
      City,
      Province,
      BkmPic,
      BkmPhone,
    ]);

    // console.log('rows', rows[0])

    return rows[0];
  } catch (e) {
    throw e;
  }
};

exports.update = async (data) => {
  // console.log('id', id)
  console.log('data', data)
  try {
    // const { MasjidName, MasjidAddress, City, Province, BkmPic, BkmPhone, id} = data;

    // console.log(data.MasjidName)
    // console.log(data.MasjidAddress)
    // console.log(data.BkmPhone)
    // console.log(data.BkmPic)
    // console.log(data.Province)
    // console.log(data.City)
    // console.log(data.id)

    // const sql = "UPDATE masjid_info set masjid_name = $1, masjid_address = $2, city = $3, province = $4, bkm_pic = $5, bkm_phone = $6 where id = $7 RETURNING *";

    // const { rows } = await postgre.query(sql, [MasjidName, MasjidAddress, City, Province, BkmPic, BkmPhone]);

    // return rows[0]

  } catch (e) {
    throw e;
  }
};

exports.delete = async (id) => {
  try {
    // console.log("delete id", id);
    const sql = "DELETE FROM masjid_info where id = $1 RETURNING *";
    const { rows } = await postgre.query(sql, [id]);
    // console.log("rows", rows[0]);

    return rows[0];

  } catch (e) {
    throw e;
  }
};
