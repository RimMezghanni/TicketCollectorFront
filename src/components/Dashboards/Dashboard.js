




function Dashboard() {

function wait_for_load(id) {
  return setTimeout(() => setIframeHeight(id), 1000)
}

/*
   Called by each iframe onload.
   Checks if the Kibana table has loaded
   And resizes the iframe when it does
*/
function setIframeHeight(id) {
  if (!id) return;
  const ifrm = document.getElementById(id); // Get our iFrame element using the id
  if (!ifrm) return;

  // If the Kibana iframe table hasn't fully loaded yet, restart this function after a wait
  if (!ifrm.contentDocument || !ifrm.contentDocument.body ||
      ifrm.contentDocument.body.getElementsByTagName('table').length === 0) {
    return wait_for_load(id)
  }

  // Finally! The table has loaded. Let's get the table height and resize the iframe
  const table_height = ifrm.contentDocument.body.getElementsByTagName('table')[0].offsetHeight + 46;
  // The extra 46px of padding helps us avoid IE and Chrome scrollbars on Windows
  ifrm.style.height = table_height + 'px';
  console.log('We exited the loop for ' + id + ' after setting a height of ' + table_height + 'px');
}


    return(

<>

{/* <div className="addmargin">
<div className="card centeralign">
<div className="card-header text-sm-left alert-primary ">New Dashboard</div>
<div className="card-body alert-secondary "> */}
<iframe src="http://localhost:5601/app/dashboards#/view/3fa059d0-add7-11ec-a920-8b66442caab3?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow))" height="480" width="700" ></iframe>    

{/* </div>
</div>
</div> */}

</>
    
    
    
    )

}

export default Dashboard