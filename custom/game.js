"use strict";
var _obj = {
    $document: $(document)
};
var _const = {
	duration: 1000,
	lessons: 9,
	array: [1,2,3,4,5,6,7,8,9],
	itemRemove: null
};
var _classes = {
	number: ".number",
	next: ".next"
};
var _ids = {
	lessons: "#lessons"
};

var loginEvent = {
    /**
     * Initial
     * @returns {undefined}
     */
    init: function () {
    	initImage();
        this.clickEvent();
    },
    clickEvent: function () {
		$( _classes.number ).click(function() {
		  $(this).css("background-color", "red");
		  var value = $(this).html();
		  var height = (value - 1) * 92;
		  $(this).animate({
		    top: 160 - height + "px",
		    left: "-605px"
		  }, _const.duration, function() {
		  	var name = value + ".jpg";
		  	var imgNm = $(".home").attr("src");
		  	imgNm = imgNm.replace("images/home", "");
		  	if (name == imgNm) {
		  		$('#exampleModal').modal('show');
		  		$("#ans").attr("src", "images/matcuoi.jpg");
		  		var audio = new Audio('custom/votay.mp3');
				audio.play();
		  	} else {
		  		$(this).animate({
					top: "0",
					left: "0"
				}, _const.duration, function() {
					$(this).css("background-color", "");
				})
		  	}
		  });
		});

		$( _classes.next ).click(function() {
			_const.lessons = _const.lessons - 1;
			$(_ids.lessons).html(_const.lessons);
			/*if (_const.lessons == 0) {
		  	  alert('Hết bài tập rồi, nhất F5 ở bàn phím đi');
		  	  return;
		    }*/
			_const.array.splice(_const.itemRemove, 1); 
		    $(".number").removeAttr("style");
		    initImage();
		});
    }
};

$(document).ready(function () {
    loginEvent.init();
});

function initImage() {
	var rdm = Math.floor(Math.random() * _const.array.length);
	if (rdm > 0) {
		rdm = rdm - 1;
	}
	_const.itemRemove = rdm;
	$(".home").attr("src", "images/home" + _const.array[rdm] + ".jpg");
}