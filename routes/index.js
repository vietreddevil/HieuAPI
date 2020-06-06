var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/checkPhone/:phone', (req, res) => {
	res.send(checkPhone(req.params.phone.replace(/ /g, '')));
});

checkPhone = (_phone) => {
	if(_phone.includes('+')){
		var _temp_phone = _phone.replace('+', '');
		if(_temp_phone.includes('+') || !/^\d+$/.test(_temp_phone)) return false;
	}else {
		if(!/^\d+$/.test(_phone)) return false;
	}

	if(_phone.includes('+84') || _phone.includes('84')) {
		if(_phone.includes('+')) {
			if(_phone.length < 12 || _phone.length > 13) return false;
			return true;
		}else {
			if(_phone.length < 11 || _phone.length > 12) return false;
			return true;
		}
	}else {
		if(_phone.length < 10 || _phone.length > 11) return false;
		return true;
	}
}

module.exports = router;
