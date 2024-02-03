const express = require('express')
const route = express.Router()
const masjidConfig = require('../controllers/MasjidConfigController')
const masjidHadist = require('../controllers/MasjidHadistController')
const masjidInfo = require('../controllers/MasjidInfoController')
const masjidMarquee = require('../controllers/MasjidMarqueeController')
const slides = require('../controllers/MasjidSlidesController')


route.get('/api/masjidConfigs', masjidConfig.findAll)
route.get('/api/masjidConfig', masjidConfig.findOne)
route.get('/api/masjidConfigById/:id', masjidConfig.findByPk)
route.post('/api/masjidConfig/post', masjidConfig.post)
route.put('/api/masjidConfig/update/:id', masjidConfig.update);
route.delete('/api/masjidConfig/delete/:id', masjidConfig.delete);

route.get('/api/masjidHadist', masjidHadist.findAll)
// route.get('/api/masjidHadist', masjidHadist.findOne)
route.get('/api/masjidHadistRandom', masjidHadist.findRandom)
route.get('/api/masjidHadistById/:id', masjidHadist.findByPk)
route.post('/api/masjidHadist/post', masjidHadist.post)
route.put('/api/masjidHadist/update/:id', masjidHadist.update);
route.delete('/api/masjidHadist/delete/:id', masjidHadist.delete);

route.get('/api/masjidInfos', masjidInfo.findAll)
route.get('/api/masjidInfo', masjidInfo.findOne)
route.get('/api/masjidInfoById/:id', masjidInfo.findByPk)
route.post('/api/masjidInfo/post', masjidInfo.post)
route.put('/api/masjidInfo/update/:id', masjidInfo.update);
route.delete('/api/masjidInfo/delete/:id', masjidInfo.delete);

route.get('/api/masjidMarquee', masjidMarquee.findAll)
route.get('/api/masjidMarqueeById/:id', masjidMarquee.findByPk)
route.post('/api/masjidMarquee/post', masjidMarquee.post)
route.put('/api/masjidMarquee/update/:id', masjidMarquee.update);
route.delete('/api/masjidMarquee/delete/:id', masjidMarquee.delete);

route.get('/api/slides', slides.findAll)
route.get('/api/getSlides', slides.getSlides)
route.get('/api/slidesById/:id', slides.findByPk)
route.get('/api/slideByName/:name', slides.findByName)
route.post('/api/slide/post', slides.post)
route.put('/api/slide/update/:id', slides.update);
route.delete('/api/slide/delete/:id', slides.delete);

module.exports = route