//--updated 12/9/12
//
var navigation_side = new Array();

//==================Navigation Menu items=========================

navigation_side[0]=	'		<ul style="border-top: 6px solid #ccc;">';
navigation_side[1]=     '                       <br>';
navigation_side[2]=	'			<li><a href="mission_vision.html"> Mission &amp; Vision</a></li>';
navigation_side[3]=	'			<li><a href="our_impact.html"> Our Impact</a></li>';
navigation_side[4]=	'			<li><a href="history.html"> History</a></li>';
navigation_side[5]=	'			<li><a href="team_board.html"> Team &amp; Board</a></li>';
navigation_side[6]=	'			<li><a href="testimonials.html"> Testimonials</a></li>';
navigation_side[7]=	'			<li><a href="press.html"> Press</a></li>';
navigation_side[8]=	'                       <li style="padding-bottom:-1px; margin-bottom: -1px;"><a href="our_supporters.html"> Our Supporters</a></li>';
navigation_side[9]=	'			<p class="style1"  style=" margin-top: -1px; padding-top: -1px;"> <br>Making Media!</p>';
navigation_side[10]=	'			<p class="style2">Making Change!</p>';
navigation_side[11]=	'		</ul><!-- end inner UL -->';


function showNav(i)
{
//==================Iterate through to write Navigation =========================
	for (x in i)
	{
		document.write(i[x]+'\n')
	}
}