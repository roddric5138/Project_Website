//--updated 11/14/2012
//
var header_navigation = new Array();

//==================Header & Top Navigation=========================

header_navigation [0] = '<div class="headerwrapper">';

header_navigation [1] = '<div class="blackheader">'; 
header_navigation [2] = '</div>';

header_navigation [3] = '<div class="socialmediaheader">';	
header_navigation [4] = '<ul>';
header_navigation [5] = '<li><a href="http://www.youtube.com/youthrightsmedia"><img src="./images/icons/y31.png" width="32" height="32" border="none"></a></li>';
header_navigation [6] = '<li><a href="https://twitter.com/yrmnewhaven"><img src="./images/icons/t31.png" width="32" height="32" border="none"></a></li>';
header_navigation [7] = '<li><a href="https://www.facebook.com/yrmnewhaven"><img src="./images/icons/f31.png" width="32" height="32" border="none"></a></li>';
header_navigation [8] = '</ul>';
header_navigation [9] = '</div>';

header_navigation [10] = '<a href="./pages/donate.html"><div class="donate">';	
header_navigation [11] = '</div>';

header_navigation [12] = '<a href="index.html"><img src="./images/nav/logo.png" width="75" height="94" style="z-index: 38; position:absolute; top: 0; left: 0;  border: 0px dashed white; margin-left: 3%; " ></a>';

header_navigation [13] = '<ul id="menu-bar" class="shadow">';

header_navigation [14] = '<div class="navwrapper">';

header_navigation [15] = '<li><a href="#">ABOUT</a>';
header_navigation [16] = '<ul>';
header_navigation [17] = '<li ><a href="./pages/mission_vision.html" ><span class="bb">Mission & Vision </span></a></li>';
header_navigation [18] = '<div class="bba"></div>';
header_navigation [19] = '<li ><a href="./pages/our_impact.html" ><span class="bb">Our Impact </span></a></li>';
header_navigation [20] = '<div class="bba"></div>';
header_navigation [21] = '<li ><a href="./pages/history.html" ><span class="bb">History </span></a></li>';
header_navigation [22] = '<div class="bba"></div>';
header_navigation [23] = '<li ><a href="./pages/team_board.html" ><span class="bb">Team & Board</span></a></li>';
header_navigation [24] = '<div class="bba"></div>';
header_navigation [25] = '<li ><a href="./pages/testimonials.html" ><span class="bb">Testimonials</span></a></li>';
header_navigation [26] = '<div class="bba"></div>';
header_navigation [27] = '<li ><a href="./pages/press.html" ><span class="bb">Press</span></a></li>';
header_navigation [28] = '<div class="bba"></div>';
header_navigation [29] = '<li ><a href="./pages/our_supporters.html" ><span class="bb0">Our Supporters</span></a></li>';
header_navigation [30] = '</ul>';
header_navigation [31] = '</li>';

header_navigation [32] = '<li><a href="#">PROGRAMS</a>';
header_navigation [33] = '<ul>';
header_navigation [34] = '<li><a href="./pages/filmmaking.html"><span class="bb">Filmmaking</span></a></li>';
header_navigation [35] = '<div class="bba"></div>';
header_navigation [36] = '<li><a href="./pages/music_production.html"><span class="bb">Music Production</span></a></li>';
header_navigation [37] = '<div class="bba"></div>';
header_navigation [38] = '<li><a href="./pages/summer_institute.html"><span class="bb">Summer Institute</span></a></li>';
header_navigation [39] = '<div class="bb0"></div>';
header_navigation [40] = '</ul>';
header_navigation [41] = '</li>';

header_navigation [42] = '<li><a href="#">MEDIA</a>';
header_navigation [43] = '<ul>';
header_navigation [44] = '<li ><a href="./pages/films2.html" ><span class="bb">Films</span></a></li>';
header_navigation [45] = '<div class="bba"></div>';
header_navigation [46] = '<li ><a href="./pages/summer_shorts.html" ><span class="bb">Summer Shorts</span></a></li>';
header_navigation [47] = '<div class="bba"></div>';
header_navigation [48] = '<li ><a href="./pages/photo_gallery.html" ><span class="bb">Photo Gallery</span></a></li>';
header_navigation [49] = '</ul>';
header_navigation [50] = '</li>';

header_navigation [51] = '<li><a href="#">PARTICIPATE</a>';
header_navigation [52] = '<ul>';
header_navigation [53] = '<li ><a href="./pages/volunteer.html" ><span class="bb">Intern / Volunteer</span></a></li>';
header_navigation [54] = '<div class="bba"></div>';
header_navigation [55] = '<li ><a href="./pages/contact.html" ><span class="bb">Contact</span></a></li>';
header_navigation [56] = '<div class="bba"></div>';
header_navigation [57] = '<li ><a href="./pages/newsletters.html" ><span class="bb">Newsletters</span></a></li>';
header_navigation [58] = '<div class="bb0"></div>';

header_navigation [59] = '</ul>';
header_navigation [60] = '</li>';

header_navigation [61] = '</div>';
header_navigation [62] = '</ul>';
header_navigation [63] = '</div>'; 



function showHeader(i)
{
//==================Iterate through to write banner =========================
	for (x in i)
	{
		document.write(i[x]+'\n')
	}
}


