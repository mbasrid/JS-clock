let name = prompt("Soyadınız:")
let cinsiyet = prompt("Cinsiyet")
let myName = document.querySelector("#myName")

if(cinsiyet == "erkek","bay"){
myName.innerHTML = `Mr.${name}`
}

else if (cinsiyet == "kadın","kız","bayan"){
    myName.innerHTML = `Mrs.${name}`
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }