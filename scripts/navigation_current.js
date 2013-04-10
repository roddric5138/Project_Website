//--updated 12/2/12
//


// This tiny little function does four things:
// 1.Finds all of the anchor tags (via getElementsByTagName) inside of the element with the “sidenav”
//   id (getElementById) – our unordered list, in this case.
// 2.Cycles through every anchor tag that we’ve found (our “for” loop).
// 3.Compares the “href” of the anchor tag with the page we’re currently on (document.location, which
//   is the URL that shows up in the bar at the top of your browser) to see if the href is contained therein.
// 4.If the href is a match for the page we’re on, it sets a class of “active” on the anchor tag (className=’current’).



function setCurrent()
{
  aObj = document.getElementById('sidenav').getElementsByTagName('a');
  for(i=0;i<aObj.length;i++)
  { 
    if(document.location.href.indexOf(aObj[i].href)>=0)
    {
      aObj[i].className='current';
    }
  }
}