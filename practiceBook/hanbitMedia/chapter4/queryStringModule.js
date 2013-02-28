var url = require('url');
var querystring = require("querystring");

var parseObject = url.parse("http://news.khan.co.kr/kh_news/khan_art_view.html?artid=201302280948201&code=910402&nv=stand");
console.log(querystring.parse(parseObject.query));