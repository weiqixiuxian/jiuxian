$(function(){
	$('.top-down').mouseover(function() {
		$(this).css({'background':'#fff'}).find('div').show();
	})
	$('.top-down').mouseout(function() {
		$(this).css({'background':'#f2f2f2'}).find('div').hide();
	})


	//轮播图start
	var index=0;
	var img=$('.mainbanner .images li');
	var threeimg=$('.threeImages li');
	var bt=$('.mainbanner .bt li');
	for(var i=0;i<img.length;i++){
		threeimg.eq(i).html('<a href="" style="background:url(img/'+(i+1)+'.png)"></a> <a href="" style="background:url(img/'+(i+2)+'.png)"></a> <a href="" style="background:url(img/'+(i+3)+'.png)"></a>');
		img.eq(i).css({'background-image':'url(img/bigimg'+(i+1)+'.jpg)'});
	}
	var time;
	function settime(){
		time=setInterval(function (){
			if(index==6)
				index=0;
			else index++;
			threeimg.stop().eq(index).fadeIn(700).siblings().fadeOut(0);
			img.stop().eq(index).fadeIn(1000).siblings().fadeOut(1000);
			$('.mainbanner .bt li').eq(index).
			addClass('on').siblings().removeClass('on');
		},3000);	

	}
	settime();

	bt.mouseover(function() {
		$(this).addClass('on').siblings().removeClass('on');
		index=$(this).index();
		img.stop().eq(index).fadeIn(1000).siblings().fadeOut(1000);
		threeimg.stop().eq(index).fadeIn(700).siblings().fadeOut(0);
		clearInterval(time);
	});

	bt.mouseout(function() {
		settime();
	});

	img.mouseover(function() {
		clearInterval(time);
	});

	img.mouseout(function(event) {
		settime()
	});

	threeimg.mouseover(function() {
		clearInterval(time);
	});
	
	threeimg.mouseout(function() {
		settime();
	});
	
	//right轮播图
	function btclick(obj,bt){
		bt.addClass('on').siblings().removeClass('on');
		obj.rindex=bt.index();
		obj.mlf=-268*obj.rindex+'px';
		obj.dul.stop().animate({'margin-left':obj.mlf},500);
	}

	function rightTime(obj){
		if(obj.rindex==3){
			obj.dul.css({'margin-left':'0px'})
			obj.rindex=0;
			obj.bt.eq(obj.rindex).addClass('on').siblings().removeClass('on');
		}
		obj.rindex++;
		obj.bt.eq(obj.rindex).addClass('on').siblings().removeClass('on');
		obj.mlf=-268*obj.rindex+'px';
		obj.dul.animate({'margin-left':obj.mlf},500);
		if(obj.rindex==3){
			obj.bt.eq(0).addClass('on').siblings().removeClass('on');
		}
	}
	var div2={
		rindex:0,
		dul:$('.animate1 ul'),
		mlf:null,
		bt:$('.animate1 .bt span')
	}
	var div3={
		rindex:0,
		dul:$('.animate2 ul'),
		mlf:null,
		bt:$('.animate2 .bt span')
	}
	div2.bt.click(function(){
		btclick(div2,$(this));
	});
	div3.bt.click(function(){
		btclick(div3,$(this));
	});
	setInterval(function(){
		rightTime(div2);
	},2000)
	setInterval(function(){
		rightTime(div3);
	},2000)
		
		


	//end

	//轮播图stop
	//导航start
	$('.nav-left-li').mouseover(function() {
		$(this).addClass('on').children('.showtext').show();
	});
	$('.nav-left-li').mouseout(function() {
		$(this).removeClass('on').children('.showtext').hide();
	});
	//导航end
	//疯狂抢购start
	$('.indexTabNav li').mousemove(function(){
		$(this).addClass('on').siblings().removeClass('on');
		_this=this;
		$('.indexTabConWrap .indexTabCon').eq($(_this).index())
		.show().siblings().hide();
	})
	$('.indexRight .nav li').mousemove(function(){
		$(this).addClass('on').siblings().removeClass('on');
		_this=this;
		$('.indexRight .content').eq($(_this).index())
		.show().siblings().hide();
	})
	//疯狂抢购end
})
