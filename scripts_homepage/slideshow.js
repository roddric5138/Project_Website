// updated 11/9/2012
//
var imglist = new Array("./slideshow/photo1.png","./slideshow/photo2.png","./slideshow/photo3.png","./slideshow/photo4.png",
"./slideshow/photo5.png");
var imgnum = 0;
var opacity = 100;
var delta = 2.5;
var intervalID;

function LaunchShuffler()
{
   var img;
   img = document.getElementById('photoimg1');
   img.src = imglist[0];

   img = document.getElementById('photoimg2');
   img.src = imglist[1];

   // wait for 2 seconds (2000 milliseconds)
   // set ImageFader() to run every 100 milliseconds
   window.setTimeout("intervalID = window.setInterval(\"ImageFader()\", 100);", 2000);
}

function ImageFader()
{
   var img1;
   var img2;
   var nextimgindex;

   img1 = document.getElementById('photoimg1');
   img2 = document.getElementById('photoimg2');
   opacity -= delta;
   if (opacity < 0)
   {
	  opacity += 100;
	  imgnum = (imgnum + 1) % imglist.length;
	  nextimgindex = (imgnum + 1) % imglist.length;

	  img1.src = imglist[imgnum];
	  img2.src = imglist[nextimgindex];

	  window.clearInterval(intervalID);
	  window.setTimeout("intervalID = window.setInterval(\"ImageFader()\", 100);", 2000);
   }
   setOpacity(img1, opacity);
   setOpacity(img2, 100 - opacity);
}

function setOpacity(obj, opacity) {
	 opacity = (opacity == 100)?99.999:opacity;

	//IE/Win
	//obj.style.filter = "alpha(opacity:"+opacity+")";
	obj.style.filter = "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity:"+opacity+")";

	// Safari<1.2, Konqueror
	obj.style.KHTMLOpacity = opacity/100;

	// Older Mozilla and Firefox
	obj.style.MozOpacity = opacity/100;

	// Safari 1.2, newer Firefox and Mozilla, CSS3
	 obj.style.opacity = opacity/100;
}
