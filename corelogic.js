$.fn.animateRotate = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 0}).animate({deg: angle}, args);
  });
};


$( document ).ready(function() {


	//rotate action
	var angle = 0;
	var totaldraw = 0;
	var randomroot;
	
	$('#wheel').on('click', function() {	
		var vid = document.getElementById("song");
		vid.play();
	
	
		randomroot = Math.floor(Math.random() * 7);
		
		if(randomroot==2&&totaldraw<5){
			randomroot = 3;
		}
		
		if(randomroot==0&&totaldraw<3){
			randomroot = 3;
		}
		
		if(randomroot==4&&totaldraw<3){
			randomroot = 5;
		}
		
		if(randomroot==7&&totaldraw<3){
			randomroot = 5;
		}
		
		var randomvalue = randomroot*52;
		//…jQuery.fn.animateRotate(angle, duration, easing, complete)
		$('#wheelbody').animateRotate(3600+randomvalue, 8000, "swing",function () {
		
			switch(randomroot){
				case 1:
				case 5:
					alert("你抽中了迪西（Dipsy）,很可惜迪西沒有準備禮物比你,但你可以再抽一次!");
					break;
				case 2:
					alert("你抽中了你最中意的小波（Po）,你有一份神秘大獎!!(但請有心理準備,不要鬧你男朋友)");
					break;
				case 3:	
				case 6:	
					alert("你抽中了丁丁（Tinky Winky）,很可惜丁丁很窮,只可以幫你可以再抽一次。");
					break;
				case 4:	
				case 7:	
				case 0:	
					alert("你抽中了拉拉（Laa-Laa）,你有一份小獎品(但只得一份)!及可以再抽一次!");
					break;
			}
			totaldraw++;
		})
	});
	
	
	//playsong
	
	$('#playsong').on('click', function() {
		var vid = document.getElementById("song");
		vid.play();
	});
	
});
