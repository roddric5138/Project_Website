//--update 12/9/12
//
var footer = new Array();

//==================footer Menu items=========================

footer[0] = '<div id="footer-layout-slicing-09" >';
footer[1] = '	<ul>';
footer[2] = '			<li style="padding-top:0; margin-top:0; "><a href="./pages/forms.html"#"> FORMS</a></li>';
footer[3] = '			<br>';
footer[4] = '			<li><a href="./pages/alumni.html"> ALUMNI</a></li>';
footer[5] = '			<br>';
footer[6] = '			<li><a href="./pages/sitemap.html"> SITEMAP</a></li>';
footer[7] = '	</ul>';
footer[8] = '</div>';
footer[9] = '<div id="footer-layout-slicing-10">';

footer[10] = '	<p class="style2"> Contact Us<p>';
footer[11] = '	<br>';
footer[12] = '			<p>Our contact info:</p>';
footer[13] = '			<p>Youth Rights Media</p>';
footer[14] = '			<p>77 Willow Street, 2nd Floor</p>';
footer[15] = '			<p>New Haven, CT 06511 </p>';
footer[16] = '			<p>p: 203.776.4034</p>';
footer[17] = '			<p>f: 203.785.8282</p>';
footer[18] = '	<ul>';
footer[19] = '<li><a href="mailto:info@youthrightsmedia.org">info@youthrightsmedia.org</a></li>';
footer[20] = '<li><a href="http://maps.google.com/maps?f=d&source=s_q&hl=en&geocode=%3BCV7Pd5EnNKRZFRV-dgIdaYmn-ylvfHtO3NnniTH0PN90vDnaqQ&q=77+Willow+Street,+New+Haven,+CT&aq=0&oq=77+Willow+St&sll=41.315646,-73.134981&sspn=0.11707,0.232773&ie=UTF8&hq=&hnear=77+Willow+St,+New+Haven,+Connecticut+06511&t=m&z=14&vpsrc=0&iwloc=A&daddr=77+Willow+St,+New+Haven,+CT+06511">Get Directions<a></li>';
footer[21] = '	</ul>';
footer[22] = '</div>';


footer[23] = '<div id="formEmail">';

footer[24] = '<p>Email Us</p>';

footer[25] = '<form method="post" action="./mail/mail.php">';
footer[26] = '<label for="name">Name:</label>';
footer[27] = '<input type="text" name="name" id="name" class="textfield">';
footer[28] = '<label for="email">E-mail:</label>';
footer[29] = '<input type="text" name="email" id="email" class="textfield">';
footer[30] = '<label for="message">Message:</label>';
footer[31] = '<textarea name="message" id="message" rows="2" cols="20" class="textfield"> </textarea>';
footer[32] = '<input type="button" class="mysubmit">';
footer[33] = '</form>';	
footer[34] = '</div> <!--end of formEmail-->';

footer[35] = '<div class="copyright"> <br>Copyright &copy; 2012 Youth Rights Media<br><br> </div>'; 

function showFooter(i)
{
//==================Iterate through to write footer =========================
	for (x in i)
	{
		document.write(i[x]+'\n')
	}
}
	