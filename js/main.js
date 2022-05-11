$(function(){
	function mobileLink(){
		if(isMobile){
			$(".project1 a").attr({href: "project1/mobile/index.html"});
			$(".project2 a").attr({href: "project2/mobile/index.html"});
		}
		else{
			$(".project1 a").attr({href: "project1/pc/index.html"});
			$(".project2 a").attr({href: "project2/pc/index.html"});
		}

		$(".project3 a").attr({href: "project3/project3/index.html"});
	}

	mobileLink();
});