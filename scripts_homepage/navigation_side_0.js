//--updated 12/9/12
//
var navigation_side= new Array();

//==================Navigation Menu items=========================

navigation_side[0]=	'		<ul style="border-top: 6px solid #ccc;">';
navigation_side[1]=     '                       <br>';
navigation_side[2]=	'			<li><a href="./pages/alumni.html"> Alumni</a></li>';
navigation_side[3]=	'			<li><a href="http://yrmnews.tumblr.com/"> Blog</a></li>';
navigation_side[4]=	'			<li><a href="./pages/forms.html"> Forms</a></li>';
navigation_side[5]=	'			<li><a href="./pages/our_supporters.html"> Our Supporters</a></li>';
navigation_side[6]=	'			<li style="padding-bottom:-1px; margin-bottom: -1px;"> </li>';
navigation_side[7]=	'			<p class="style1"  style=" margin-top: -1px; padding-top: -1px;"> <br>Making Media!</p>';
navigation_side[8]=	'			<p class="style2">Making Change!</p>';
navigation_side[9]=	'		</ul><!-- end inner UL -->';



function showNav(i)
{
//==================Iterate through to write Navigation =========================
	for (x in i)
	{
		document.write(i[x]+'\n')
	}
}
	