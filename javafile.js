function validation(){
  var email=document.getElementById("text").value
  var regx=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+.)([a-z]+)(.[a-z]+)?$/
  if (regx.text(email)){
    alert("Successful")
    return true
  }
  else{
    alert("Invalid Email")
    return false
  }
}