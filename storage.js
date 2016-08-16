function saveDataLS(){
  localStorage.data = document.getElementById('LS').value;
  updateLength();
}
function resetDataLS(){
  localStorage.removeItem('data');
  updateLength();
}

function saveDataSS(){
  sessionStorage.data = document.getElementById('SS').value;
  updateLength();
}

function resetDataSS(){
  sessionStorage.removeItem('data');
  updateLength();
}

function updateLength() {
  document.getElementById('LSlength').innerHTML = 'The length of LocalStorage is: ' + localStorage.length
                                                  + ". The stored value is: " + localStorage.data;
  document.getElementById('SSlength').innerHTML = 'The length of SessionStorage is: ' + sessionStorage.length
                                                  + ". The stored value is: " + sessionStorage.data;
}
window.onload = updateLength();
