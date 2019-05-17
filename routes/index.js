var express = require('express');
var router = express.Router();

var userobj = {type: '审核员'}  //或  '下属单位'


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/index', function(req, res) {
  res.render('../index', { userObj: userobj })
});
// 文件上传
router.get('/uploader', function(req, res) {
  res.render('../uploader', { userObj: userobj })
});


// 审核员：审核页面
router.get('/tables/data', function(req, res) {
  res.render('../tables/data', { userObj: userobj })
});
// 审核员：季度审核
router.get('/tables/quarter', function(req, res) {
  res.render('../tables/quarter', { userObj: userobj })
});
// 审核员：单位信息管理
router.get('/tables/company', function(req, res) {
  res.render('../tables/company', { userObj: userobj })
});
// 下属单位：新增项目
router.get('/tables/uploadData', function(req, res) {
  res.render('../tables/uploadData', { userObj: userobj })
});


// 下属单位：季度汇报文件
router.get('/tables/report', function(req, res,) {
  res.render('../tables/report', { userObj: userobj })
});
// 审核员：汇总表生成与打印
router.get('/tables/receipt', function(req, res) {
  res.render('../tables/receipt', { userObj: userobj })
});
// 下属单位：基本信息
router.get('/forms/general', function(req, res) {
  res.render('../forms/general', { userObj: userobj })
});

module.exports = router;
