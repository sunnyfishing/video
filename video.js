$(function(){
	//console.log("ok");
	var video = document.getElementById("video");
	//点击开始播放按钮
	$(".pause").click(function(){
		$(".play").css({display:"block"});
		$(".pause").css({display:"none"});
		video.play();
	})
	//点击暂停按钮
	$(".play").click(function(){
		$(".play").css({display:"none"});
		$(".pause").css({display:"block"});
		video.pause();
	})
	//获得总时长
	totTime();
	function totTime(){
		var times = video.duration;
		var timesM = parseInt(times/60);
		var timesS = Math.ceil(times%60);
		if(timesS < 10){
			timesS = "0"+timesS;
		}
		console.log(timesM,timesS);
		$(".time :nth-child(3)").html("0"+timesM+":"+timesS);
		//console.log($(".time span:nth-child(2)").html());
	}
})
