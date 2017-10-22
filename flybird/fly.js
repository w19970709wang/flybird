$(function(){
	$(".end_page").hide();
	$(".top_height").hide();	
		$(".num").hide();
		$(".pipe").hide();
		
	 $("#start").click(function(){
		$(".open").hide();
		$("#start").hide();
		$(".top_height").show();
		$(".pipe").show();
		$(".flyBird").show();
		$('.num').show();
		next();
	});


    
	//鼠标点击小鸟上升
		$(".container").click(function(){
		//var time3 = setInterval(function(){
				up();
			// },200);
		});	
	
		
		function birdDown(){
			$('.flyBird').css('top',400+'px');
		}
		$('.ok').click(function(){
			window.location.reload()
		});
		
	
})
function next (){
	
	flyBird(1); //小鸟移动
gunMove(1);  //柱子移动
//wayMove(); //道路移动
downTime(1);//自然下落
birdDown(1);//小鸟下降
HeingtTop(1);
    };
    
    	function down(){
			var num =1;
		//origin_top	  = parseInt($('.flyBird').css('top'));
			if(num%2==0){
				$(".flyBird").css("background-image","url(img/down_bird1.png)");
			}else{
				$(".flyBird").css("background-image","url(img/down_bird0.png)");
			}
			// $(".flyBird").animate({"top":"+=10px"},100);
			var k = (parseInt($('.flyBird').css('top'))+10)+"px";

			// alert(k);
			$(".flyBird").css("top",k);
		
			num++;
		}

 		
		function up(){
			var num1 =1;
			var origin_top	 = parseInt($('.flyBird').css('top'));
			if(num1%2==0){
				$(".flyBird").css("background-image","url(img/up_bird1.png)");
			}else{
				$(".flyBird").css("background-image","url(img/up_bird0.png)");
			}
			
			var k = (origin_top-20)+"px";
			$(".flyBird").css("top",k);
			// $(".flyBird").animate({"top":"-=10px"},100);
			num1++;
		};
		
			function end(){
			$('.end_page').show();
			clearInterval(
				move
			);
				flyBird(2); //小鸟移动
				gunMove(2);  //柱子移动
				//wayMove(); //道路移动
				downTime(2);//自然下落
				birdDown(2);//小鸟下降
				HeingtTop(2);
		return;
		};
		
		
    	//路移动
    	var move=setInterval(function(){
		$(".road").animate({left:"+=15px"},function(){
			var maxLimit=0;
			var _left=parseInt($(this).css("left"));
			if(_left>maxLimit){
				$(".road").css("left",-343+"px");
			}
		})
	},200);

  
//鼠标松开小鸟下降
function birdDown(num3){
		if(num3==2){
   		clearInterval(7);
   		return;
   		}
	var nm =0 ;
	var time3 = setInterval(function(){
			var up_pipe1 = parseInt($(".up_pipe1").css('height'));
			var up_pipe3 = parseInt($('.up_pipe3').css('height'));
			var up_pipe2 = parseInt($('.up_pipe2').css('height'));
			var origin_top	= parseInt($('.flyBird').css('top'));
			var pipe_left=parseInt($('.pipe').css('left'));
			var down1 = 390-up_pipe1;
			var down2 = 390-up_pipe2;
			var down3 = 390-up_pipe3;
			// console.log(origin_top);
			console.log(pipe_left);
			 // console.log(up_pipe1,origin_top,down1);
			//撞到第一根柱子
			if(origin_top<0||origin_top>380){
				end();
				return;
			}
		
			if(16<pipe_left&&pipe_left<123){
				if(up_pipe1<origin_top&&origin_top<down1){
				
				}else{
					end();
					return;
				}
			}	
			//经过第一根柱子计数	
			if(pipe_left<=16&&pipe_left>12){
				if(up_pipe1<origin_top&&origin_top<down1){		
						nm++;
						$('.num').html(nm);
				}
			}
			
			
			
			//撞到第二根柱子
			if(-167<pipe_left&&pipe_left<-70){
				if(up_pipe2<origin_top&&origin_top<down2){
			
				}else{
					end();
					return;
				}
			}
			//经过第2根柱子计数	
			if(-180<pipe_left&&pipe_left<=-173){
				if(up_pipe2<origin_top&&origin_top<down2){
						nm++;
						$('.num').html(nm);
				}
			}
			
			
			//撞到第三根柱子
				//撞到第三根柱子
			if(-375<pipe_left&&pipe_left<-275){
				if(up_pipe3<origin_top&&origin_top<down3){
				
				}else{
					end();
					return;
				}
			}
			//经过第3根柱子计数
			if(-380<=pipe_left&&pipe_left<-370){
				if(up_pipe3<origin_top&&origin_top<down3){
						nm++;
						$('.num').html(nm);
				}
			}
			
		},150);
	
}
		
   //柱子移动
   function gunMove(num3){
   		if(num3==2){
   		clearInterval(5);
   		$(".pipe").stop(true);
   		return;
   		}
   	
   	   var pipes_move=setInterval(function(){
   	 
		$(".pipe").animate({left:"-=25px"},function(){
			var maxLimits=-483;
			var _right=parseInt($(this).css("left"));
			if(_right<maxLimits){
				$(".pipe").css("left",350+"px");
			}
		})
	},90);
	
   }
 
	function HeingtTop(num3){
		if(num3==2){
	clearInterval(8);
	return;
	}

	var heingtTop = setInterval(function(){
		pipe_height()
	},14000);
		
 	}
	//小鸟自然下落
	function downTime (num3){
				if(num3==2){
	clearInterval(6);
	return;
	}
		var time2 = setInterval(function(){
			down();
			
		},500);
	
	}
		
//开始页面小鸟及自跳动
function flyBird(num3){
		  if(num3==2){
	clearInterval(4);
	return;
	}
	var fly=setInterval(function(){
		var top_height=0;
		if(top_height%2==0){
			$("#bird").css("background-image","url(img/bird0.png)");
			$(".open").css("top","55px");
		}else{
			$("#bird").css("background-image","url(img/bird1.png)");
			$(".open").css("top","45px");
		}
		top_height++;
    },500); 
  
   }
		//柱子随机生成高度
	
	function pipe_height(){
	var top_height=0;
	var down_height=0;
	var num=2;
		var random_top_height=Math.random();
		if(0.1<random_top_height<=0.2){
			top_height = random_top_height*1300;
		}else if(0.2<random_top_height<=0.4){
			top_height = random_top_height*350;
		}else if(0.4<random_top_height<=0.6){
			top_height = random_top_height*280;
		}else if(0.6<random_top_height<=0.8){
			top_height = random_top_height*220;
		}else{
			top_height = random_top_height*150;
		}
		down_height=280-top_height;
		
		if(num%2==0){
			$(".up_pipe1").css("height",top_height+"px");
			$(".down_pipe1").css("height",down_height+"px");
			$(".up_pipe3").css("height",top_height+"px");
			$(".down_pipe3").css("height",down_height+"px");	
		
			
		}else{
			$(".up_pipe2").css("height",top_height+"px");
			$(".down_pipe2").css("height",down_height+"px");
		
			
			}
		num++;
	};
