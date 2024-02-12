const fs = require("fs/promises");
const postgre = require("../db");

exports.findAll = async () => {
  try {
    const { rows } = await postgre.query('SELECT Id as "Id", ' +
    'MINUTES_TO_ADZAN_SHUBUH as "MinutesToAdzanShubuh", MINUTES_TO_ADZAN_DZUHUR as "MinutesToAdzanDzuhur", MINUTES_TO_ADZAN_ASHAR as "MinutesToAdzanAshar", MINUTES_TO_ADZAN_MAGHRIB as "MinutesToAdzanMaghrib", MINUTES_TO_ADZAN_ISYA as "MinutesToAdzanIsya", ' +
    'MINUTES_TO_IQOMAH_SHUBUH as "MinutesToIqomahShubuh", MINUTES_TO_IQOMAH_DZUHUR as "MinutesToIqomahDzuhur", MINUTES_TO_IQOMAH_ASHAR as "MinutesToIqomahAshar", ' +
    'MINUTES_TO_IQOMAH_MAGHRIB as "MinutesToIqomahMaghrib", MINUTES_TO_IQOMAH_ISYA as "MinutesToIqomahIsya", MINUTES_TO_ADZAN_PREP as "MinutesToAdzanPrep", LABEL_SHUBUH as "LabelShubuh", LABEL_SYURUQ as "LabelSyuruq", LABEL_DZUHUR as "LabelDzuhur", ' +
    'LABEL_ASHAR as "LabelAshar", LABEL_MAGHRIB as "LabelMaghrib", LABEL_ISYA as "LabelIsya", ADJUST_SHUBUH as "AdjustShubuh", ADJUST_SYURUQ as "AdjustSyuruq", ADJUST_DZUHUR as "AdjustDzuhur", ' +
    'ADJUST_ASHAR as "AdjustAshar", ADJUST_MAGHRIB as "AdjustMaghrib", ADJUST_ISYA as "AdjustIsya", TEXT_BEFORE_ADZAN as "TextBeforeAdzan", TEXT_BEFORE_IQOMAH as "TextBeforeIqomah", TEXT_DURING_SHOLAT1 as "TextDuringSholat1", TEXT_DURING_SHOLAT2 as "TextDuringSholat2", ' +
    'LATITUDE as "Latitude", LONGITUDE as "Longitude", BG_IMG_SHOLAT as "BgImgSholat", ICON_DURING_SHOLAT as "IconDuringSholat", INTERVAL_SLIDE as "IntervalSlide", ' +
    'INTERVAL_HADIST as "IntervalHadist", SHOLAT_DURATION as "SholatDuration", SOUND_LOCATION as "SoundLocation", FONTSIZE_MASJIDNAME as "FontSizeMasjidname", FONTSIZE_MASJIDADDRESS as "FontSizeMasjidaddress", ' +
    'FONTSIZE_DATE as "FontSizeDate", FONTSIZE_CLOCK_HOUR_MINUTE as "FontSizeClockHourMinute", FONTSIZE_CLOCK_SECOND as "FontSizeClockSecond", FONTSIZE_HADIST as "FontSizeHadist", FONTSIZE_MARQUEE as "FontSizeMarquee", FONTSIZE_PRAYERLABEL as "FontSizePrayerlabel", FONTSIZE_PRAYERTIME as "FontSizePrayertime" ' +
    'FROM masjid_config ORDER BY id');
    // console.log("rows", rows);
    return rows;
  } catch (e) {
    throw e;
  }
};

exports.findOne = async () => {
  try {
    const { rows } = await postgre.query(
    'SELECT Id as "Id", ' +
    'MINUTES_TO_ADZAN_SHUBUH as "MinutesToAdzanShubuh", MINUTES_TO_ADZAN_DZUHUR as "MinutesToAdzanDzuhur", MINUTES_TO_ADZAN_ASHAR as "MinutesToAdzanAshar", MINUTES_TO_ADZAN_MAGHRIB as "MinutesToAdzanMaghrib", MINUTES_TO_ADZAN_ISYA as "MinutesToAdzanIsya", ' +
    'MINUTES_TO_IQOMAH_SHUBUH as "MinutesToIqomahShubuh", MINUTES_TO_IQOMAH_DZUHUR as "MinutesToIqomahDzuhur", MINUTES_TO_IQOMAH_ASHAR as "MinutesToIqomahAshar", ' +
    'MINUTES_TO_IQOMAH_MAGHRIB as "MinutesToIqomahMaghrib", MINUTES_TO_IQOMAH_ISYA as "MinutesToIqomahIsya", MINUTES_TO_ADZAN_PREP as "MinutesToAdzanPrep", LABEL_SHUBUH as "LabelShubuh", LABEL_SYURUQ as "LabelSyuruq", LABEL_DZUHUR as "LabelDzuhur", ' +
    'LABEL_ASHAR as "LabelAshar", LABEL_MAGHRIB as "LabelMaghrib", LABEL_ISYA as "LabelIsya", ADJUST_SHUBUH as "AdjustShubuh", ADJUST_SYURUQ as "AdjustSyuruq", ADJUST_DZUHUR as "AdjustDzuhur", ' +
    'ADJUST_ASHAR as "AdjustAshar", ADJUST_MAGHRIB as "AdjustMaghrib", ADJUST_ISYA as "AdjustIsya", TEXT_BEFORE_ADZAN as "TextBeforeAdzan", TEXT_BEFORE_IQOMAH as "TextBeforeIqomah", TEXT_DURING_SHOLAT1 as "TextDuringSholat1", TEXT_DURING_SHOLAT2 as "TextDuringSholat2", ' +
    'LATITUDE as "Latitude", LONGITUDE as "Longitude", BG_IMG_SHOLAT as "BgImgSholat", ICON_DURING_SHOLAT as "IconDuringSholat", INTERVAL_SLIDE as "IntervalSlide", ' +
    'INTERVAL_HADIST as "IntervalHadist", SHOLAT_DURATION as "SholatDuration", SOUND_LOCATION as "SoundLocation", FONTSIZE_MASJIDNAME as "FontSizeMasjidname", FONTSIZE_MASJIDADDRESS as "FontSizeMasjidaddress", ' +
    'FONTSIZE_DATE as "FontSizeDate", FONTSIZE_CLOCK_HOUR_MINUTE as "FontSizeClockHourMinute", FONTSIZE_CLOCK_SECOND as "FontSizeClockSecond", FONTSIZE_HADIST as "FontSizeHadist", FONTSIZE_MARQUEE as "FontSizeMarquee", FONTSIZE_PRAYERLABEL as "FontSizePrayerlabel", FONTSIZE_PRAYERTIME as "FontSizePrayertime" ' +
    'FROM masjid_config ORDER BY id LIMIT 1'
    );
    // console.log("rows", rows[0]);
    return rows[0];
    
  } catch (e) {
    throw e;
  }
};

exports.findByPk = async (id) => {
  try {
    const sql = 'SELECT Id as "Id", ' +
    'MINUTES_TO_ADZAN_SHUBUH as "MinutesToAdzanShubuh", MINUTES_TO_ADZAN_DZUHUR as "MinutesToAdzanDzuhur", MINUTES_TO_ADZAN_ASHAR as "MinutesToAdzanAshar", MINUTES_TO_ADZAN_MAGHRIB as "MinutesToAdzanMaghrib", MINUTES_TO_ADZAN_ISYA as "MinutesToAdzanIsya", ' +
    'MINUTES_TO_IQOMAH_SHUBUH as "MinutesToIqomahShubuh", MINUTES_TO_IQOMAH_DZUHUR as "MinutesToIqomahDzuhur", MINUTES_TO_IQOMAH_ASHAR as "MinutesToIqomahAshar", ' +
    'MINUTES_TO_IQOMAH_MAGHRIB as "MinutesToIqomahMaghrib", MINUTES_TO_IQOMAH_ISYA as "MinutesToIqomahIsya", MINUTES_TO_ADZAN_PREP as "MinutesToAdzanPrep", LABEL_SHUBUH as "LabelShubuh", LABEL_SYURUQ as "LabelSyuruq", LABEL_DZUHUR as "LabelDzuhur", ' +
    'LABEL_ASHAR as "LabelAshar", LABEL_MAGHRIB as "LabelMaghrib", LABEL_ISYA as "LabelIsya", ADJUST_SHUBUH as "AdjustShubuh", ADJUST_SYURUQ as "AdjustSyuruq", ADJUST_DZUHUR as "AdjustDzuhur", ' +
    'ADJUST_ASHAR as "AdjustAshar", ADJUST_MAGHRIB as "AdjustMaghrib", ADJUST_ISYA as "AdjustIsya", TEXT_BEFORE_ADZAN as "TextBeforeAdzan", TEXT_BEFORE_IQOMAH as "TextBeforeIqomah", TEXT_DURING_SHOLAT1 as "TextDuringSholat1", TEXT_DURING_SHOLAT2 as "TextDuringSholat2", ' +
    'LATITUDE as "Latitude", LONGITUDE as "Longitude", BG_IMG_SHOLAT as "BgImgSholat", ICON_DURING_SHOLAT as "IconDuringSholat", INTERVAL_SLIDE as "IntervalSlide", ' +
    'INTERVAL_HADIST as "IntervalHadist", SHOLAT_DURATION as "SholatDuration", SOUND_LOCATION as "SoundLocation", FONTSIZE_MASJIDNAME as "FontSizeMasjidname", FONTSIZE_MASJIDADDRESS as "FontSizeMasjidaddress", ' +
    'FONTSIZE_DATE as "FontSizeDate", FONTSIZE_CLOCK_HOUR_MINUTE as "FontSizeClockHourMinute", FONTSIZE_CLOCK_SECOND as "FontSizeClockSecond", FONTSIZE_HADIST as "FontSizeHadist", FONTSIZE_MARQUEE as "FontSizeMarquee", FONTSIZE_PRAYERLABEL as "FontSizePrayerlabel", FONTSIZE_PRAYERTIME as "FontSizePrayertime" ' +
    'FROM masjid_config where id = $1 ORDER BY id';

    const { rows } = await postgre.query(sql, [id]);
    // console.log("rows", rows)
    return rows[0];
  } catch (e) {
    throw e;
  }
};

exports.create = async (data) => {
  try {
    const {
      MinutesToAdzanShubuh,
      MinutesToAdzanDzuhur,
      MinutesToAdzanAshar,
      MinutesToAdzanMaghrib,
      MinutesToAdzanIsya,
      MinutesToIqomahShubuh,
      MinutesToIqomahDzuhur,
      MinutesToIqomahAshar,
      MinutesToIqomahMaghrib,
      MinutesToIqomahIsya,
      MinutesToAdzanPrep,
      LabelShubuh,
      LabelSyuruq,
      LabelDzuhur,
      LabelAshar,
      LabelMaghrib,
      LabelIsya,
      AdjustShubuh,
      AdjustSyuruq,
      AdjustDzuhur,
      AdjustAshar,
      AdjustMaghrib,
      AdjustIsya,
      TextBeforeAdzan,
      TextBeforeIqomah,
      TextDuringSholat1,
      TextDuringSholat2,
      Latitude,
      Longitude,
      BgImgSholat,
      IconDuringSholat,
      IntervalSlide,
      IntervalHadist,
      SholatDuration,
      SoundLocation,
      FontSizeMasjidname,
      FontSizeMasjidaddress,
      FontSizeDate,
      FontSizeClockHourMinute,
      FontSizeClockSecond,
      FontSizeHadist,
      FontSizeMarquee,
      FontSizePrayerlabel,
      FontSizePrayertime
    } = data;


    // console.log('data', data)

    const sql =
      "INSERT INTO masjid_config(MINUTES_TO_ADZAN_SHUBUH, MINUTES_TO_ADZAN_DZUHUR, MINUTES_TO_ADZAN_ASHAR, MINUTES_TO_ADZAN_MAGHRIB, MINUTES_TO_ADZAN_ISYA, MINUTES_TO_IQOMAH_SHUBUH, MINUTES_TO_IQOMAH_DZUHUR, MINUTES_TO_IQOMAH_ASHAR, " +
      "MINUTES_TO_IQOMAH_MAGHRIB, MINUTES_TO_IQOMAH_ISYA, MINUTES_TO_ADZAN_PREP, LABEL_SHUBUH, LABEL_SYURUQ, LABEL_DZUHUR, LABEL_ASHAR, LABEL_MAGHRIB, LABEL_ISYA, ADJUST_SHUBUH, ADJUST_SYURUQ, ADJUST_DZUHUR, " +
      "ADJUST_ASHAR, ADJUST_MAGHRIB, ADJUST_ISYA, TEXT_BEFORE_ADZAN, TEXT_BEFORE_IQOMAH, TEXT_DURING_SHOLAT1, TEXT_DURING_SHOLAT2, LATITUDE, LONGITUDE, BG_IMG_SHOLAT, ICON_DURING_SHOLAT, INTERVAL_SLIDE, " +
      "INTERVAL_HADIST, SHOLAT_DURATION, SOUND_LOCATION, FONTSIZE_MASJIDNAME, FONTSIZE_MASJIDADDRESS, FONTSIZE_DATE, FONTSIZE_CLOCK_HOUR_MINUTE, FONTSIZE_CLOCK_SECOND, FONTSIZE_HADIST, FONTSIZE_MARQUEE, FONTSIZE_PRAYERLABEL, FONTSIZE_PRAYERTIME) " +
      "VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44) RETURNING *";
    
    const { rows } = await postgre.query(sql, [
      MinutesToAdzanShubuh,
      MinutesToAdzanDzuhur,
      MinutesToAdzanAshar,
      MinutesToAdzanMaghrib,
      MinutesToAdzanIsya,
      MinutesToIqomahShubuh,
      MinutesToIqomahDzuhur,
      MinutesToIqomahAshar,
      MinutesToIqomahMaghrib,
      MinutesToIqomahIsya,
      MinutesToAdzanPrep,
      LabelShubuh,
      LabelSyuruq,
      LabelDzuhur,
      LabelAshar,
      LabelMaghrib,
      LabelIsya,
      AdjustShubuh,
      AdjustSyuruq,
      AdjustDzuhur,
      AdjustAshar,
      AdjustMaghrib,
      AdjustIsya,
      TextBeforeAdzan,
      TextBeforeIqomah,
      TextDuringSholat1,
      TextDuringSholat2,
      Latitude,
      Longitude,
      BgImgSholat,
      IconDuringSholat,
      IntervalSlide,
      IntervalHadist,
      SholatDuration,
      SoundLocation,
      FontSizeMasjidname,
      FontSizeMasjidaddress,
      FontSizeDate,
      FontSizeClockHourMinute,
      FontSizeClockSecond,
      FontSizeHadist,
      FontSizeMarquee,
      FontSizePrayerlabel,
      FontSizePrayertime
    ]);

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
    const {
      MinutesToAdzanShubuh,
      MinutesToAdzanDzuhur,
      MinutesToAdzanAshar,
      MinutesToAdzanMaghrib,
      MinutesToAdzanIsya,
      MinutesToIqomahShubuh,
      MinutesToIqomahDzuhur,
      MinutesToIqomahAshar,
      MinutesToIqomahMaghrib,
      MinutesToIqomahIsya,
      MinutesToAdzanPrep,
      LabelShubuh,
      LabelSyuruq,
      LabelDzuhur,
      LabelAshar,
      LabelMaghrib,
      LabelIsya,
      AdjustShubuh,
      AdjustSyuruq,
      AdjustDzuhur,
      AdjustAshar,
      AdjustMaghrib,
      AdjustIsya,
      TextBeforeAdzan,
      TextBeforeIqomah,
      TextDuringSholat1,
      TextDuringSholat2,
      Latitude,
      Longitude,
      BgImgSholat,
      IconDuringSholat,
      IntervalSlide,
      IntervalHadist,
      SholatDuration,
      SoundLocation,
      FontSizeMasjidname,
      FontSizeMasjidaddress,
      FontSizeDate,
      FontSizeClockHourMinute,
      FontSizeClockSecond,
      FontSizeHadist,
      FontSizeMarquee,
      FontSizePrayerlabel,
      FontSizePrayertime} = data;

    const sql =
      "UPDATE masjid_config set MINUTES_TO_ADZAN_SHUBUH = $1, MINUTES_TO_ADZAN_DZUHUR = $2, MINUTES_TO_ADZAN_ASHAR = $3, MINUTES_TO_ADZAN_MAGHRIB = $4, MINUTES_TO_ADZAN_ISYA = $5, MINUTES_TO_IQOMAH_SHUBUH = $6, MINUTES_TO_IQOMAH_DZUHUR = $7, MINUTES_TO_IQOMAH_ASHAR = $8, " +
      "MINUTES_TO_IQOMAH_MAGHRIB = $9, MINUTES_TO_IQOMAH_ISYA = $10, MINUTES_TO_ADZAN_PREP = $11, LABEL_SHUBUH = $12, LABEL_SYURUQ = $13, LABEL_DZUHUR = $14, LABEL_ASHAR = $15, LABEL_MAGHRIB = $16, LABEL_ISYA = $17, ADJUST_SHUBUH = $18, ADJUST_SYURUQ = $19, ADJUST_DZUHUR = $20, " +
      "ADJUST_ASHAR = $21, ADJUST_MAGHRIB = $22, ADJUST_ISYA = $23, TEXT_BEFORE_ADZAN = $24, TEXT_BEFORE_IQOMAH = $25, TEXT_DURING_SHOLAT1 = $26, TEXT_DURING_SHOLAT2 = $27, LATITUDE = $28, LONGITUDE = $29, BG_IMG_SHOLAT = $30, ICON_DURING_SHOLAT = $31, INTERVAL_SLIDE = $32, " +
      "INTERVAL_HADIST = $33, SHOLAT_DURATION = $34, SOUND_LOCATION = $35, FONTSIZE_MASJIDNAME = $36, FONTSIZE_MASJIDADDRESS = $37, FONTSIZE_DATE = $38, FONTSIZE_CLOCK_HOUR_MINUTE = $39, FONTSIZE_CLOCK_SECOND = $40, FONTSIZE_HADIST = $41, FONTSIZE_MARQUEE = $42, FONTSIZE_PRAYERLABEL = $43, FONTSIZE_PRAYERTIME = $44 " +
      "WHERE id = $45 RETURNING *"

    const { rows } = await postgre.query(sql, [
      MinutesToAdzanShubuh,
      MinutesToAdzanDzuhur,
      MinutesToAdzanAshar,
      MinutesToAdzanMaghrib,
      MinutesToAdzanIsya,
      MinutesToIqomahShubuh,
      MinutesToIqomahDzuhur,
      MinutesToIqomahAshar,
      MinutesToIqomahMaghrib,
      MinutesToIqomahIsya,
      MinutesToAdzanPrep,
      LabelShubuh,
      LabelSyuruq,
      LabelDzuhur,
      LabelAshar,
      LabelMaghrib,
      LabelIsya,
      AdjustShubuh,
      AdjustSyuruq,
      AdjustDzuhur,
      AdjustAshar,
      AdjustMaghrib,
      AdjustIsya,
      TextBeforeAdzan,
      TextBeforeIqomah,
      TextDuringSholat1,
      TextDuringSholat2,
      Latitude,
      Longitude,
      BgImgSholat,
      IconDuringSholat,
      IntervalSlide,
      IntervalHadist,
      SholatDuration,
      SoundLocation,
      FontSizeMasjidname,
      FontSizeMasjidaddress,
      FontSizeDate,
      FontSizeClockHourMinute,
      FontSizeClockSecond,
      FontSizeHadist,
      FontSizeMarquee,
      FontSizePrayerlabel,
      FontSizePrayertime,
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
    const sql = "DELETE FROM masjid_config where id = $1 RETURNING *";
    const { rows } = await postgre.query(sql, [id]);
    // console.log("rows", rows[0]);

    return rows[0];
  } catch (e) {
    throw e;
  }
};
