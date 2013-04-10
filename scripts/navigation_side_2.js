//--updated 12/9/12
//
var navigation_side= new Array();

//==================Navigation Menu items=========================

navigation_side[0]=	'		<ul style="border-top: 6px solid #ccc;">';
navigation_side[1]=     '                       <br>';
navigation_side[2]=	'			<li><a href="filmmaking.html"> Filmmaking</a></li>';
navigation_side[3]=	'			<li><a href="music_production.html"> Music Production</a></li>';
navigation_side[4]=	'			<li style="padding-bottom:-1px; margin-bottom: -1px;"><a href="summer_institute.html"> Summer Institute</a></li>';
navigation_side[5]=	'			<p class="style1"  style=" margin-top: -1px; padding-top: -1px;"> <br>Making Media!</p>';
navigation_side[6]=	'			<p class="style2">Making Change!</p>';
navigation_side[7]=	'		</ul><!-- end inner UL -->';


function showNav(i)
{
//==================Iterate through to write Navigation =========================
	for (x in i)
	{
		document.write(i[x]+'\n')
	}
}
	