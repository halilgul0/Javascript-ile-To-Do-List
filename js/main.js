let ulDOM = document.querySelector("#list")
let textDOM = document.querySelector("#form-text")
let toatsbtnDOM = document.querySelector("#liveToastBtn")

// New Item Start
let id = 0
function newEleman(){
    let toatsDOM = document.querySelector("#toats-text")
    if (textDOM.value != "") {
    const liDOM = document.createElement("li")
    liDOM.classList.add('list-group-item','list-group-item-action','list-group-item-light')
    ulDOM.appendChild(liDOM)
    liDOM.innerHTML= `${textDOM.value}<span id="${id}" class="close" onclick="removeItem(this.id)"><i class="fas fa-times"></i></span>`
    localStorage.setItem('Item',textDOM.value)
        toatsDOM.innerHTML ="Yapılacak madde başarılı şekilde eklendi."
        textDOM.value=""
        liDOM.onclick = checkItem
        id++
    } else {
        toatsDOM.innerHTML = "Yapılacak madde eklenemedi."
    }
}
// New Item End

//check start
function checkItem(){
 this.classList.toggle("check");
}
//check end
function removeItem(id) {
  let idx = document.getElementById(id)
  idx.parentElement.remove(idx)
  
}
// Toats Start
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
// Toats End

