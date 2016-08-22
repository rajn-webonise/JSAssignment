

var saveData_LS = saveData.bind(localStorage, "LS_save_key_id", "LS_save_value_id");
var getData_LS = getData.bind(localStorage, "LS_get_key_id", "LS_get_value_id");
var deleteData_LS = deleteData.bind(localStorage, "LS_del_key_id");
var resetData_LS = resetData.bind(localStorage);

var saveData_SS = saveData.bind(sessionStorage, "SS_save_key_id", "SS_save_value_id");
var getData_SS = getData.bind(sessionStorage, "SS_get_key_id", "SS_get_value_id");
var deleteData_SS = deleteData.bind(sessionStorage, "SS_del_key_id");
var resetData_SS = resetData.bind(sessionStorage);

function saveData(key_id, value_id){
  key = ( document.getElementById(key_id).value );
  value = JSON.stringify( document.getElementById(value_id).value );

  this.setItem(key, value);
  updateLength();
}

function getData(key_id, value_id){
  key = document.getElementById(key_id).value;
  document.getElementById(value_id).innerHTML = JSON.parse(this.getItem(key));
}

function deleteData(key_id){
  key = document.getElementById(key_id).value;
  this.removeItem(key);
  updateLength();
}

function resetData(){
  this.clear();
  updateLength();
}


function updateLength() {
  document.getElementById('LSlength').innerHTML = 'The length of LocalStorage is: ' + localStorage.length;
  document.getElementById('SSlength').innerHTML = 'The length of SessionStorage is: ' + sessionStorage.length;
}
window.onload = updateLength();
