
// JavaScript Document
$(function()
{
	//初始化当前索引
	var key = 0;
	//记录上一屏，这一屏滚动将要消失
	var prev = 0;
	out();
	//滑轮滚动事件
	$(document).mousewheel(function(event,delta)
	{
		//如果没有处于执行动画状态，方可执行
		if(!$('.container').is(':animated'))
		{
			if(key < 0)
				key = 0;
			else if(key > 6)
				key = 6;
			else
				key = key - delta;
		if(key < 0)
				key = 0;
		if(key > 6)
				key = 6;
		$('.container').stop(true).animate({top:-key*100 +'%'},2500);
		};
		out(),
		prev = key;
	});
	function out(){
		$('.page').eq(prev).addClass('comeout');
		$('.page').eq(key).removeClass('comeout');
	}
	
});

