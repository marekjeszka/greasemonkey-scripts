// ==UserScript==
// @name     airflow_show_remote_status
// @version  1
// @grant    none
// ==/UserScript==

async function showRemoteStatusButton() {
  var b = document.createElement('button');
  b.setAttribute("style", 
    "font-size:14px; box-sizing: border-box; border:1px solid black; color:#ffffff; background-color:#005c66; margin-bottom: 2px");
  b.innerHTML = "Remote status";
  b.onclick = function() { 
    var task_id = document.getElementById('task_id').innerText;
    window.open(
      'https://airflow_address/admin/remoteexecutionstatus/?sort=2&desc=1&search=' + task_id,
      '_blank');
  }
  var p = document.createElement('div');
  p.append(b);
  
  document.getElementsByClassName('modal-body')[0].prepend(p);
}

showRemoteStatusButton();
