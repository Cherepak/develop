let button = document.getElementById("send");

button.addEventListener("click", () => {
    let name  = document.getElementById("name")
    let email = document.getElementById("email")
    let numberPhone = document.getElementById("numberPhone");

    fetch("./server.php", {
        method: "POST",
        body: {
            name:name,
            email:email,
            numberPhone:numberPhone
        }
    })
    .then(result => {
        return result.json();
    })
    .then(data => {
        if(data) {
            alert("Данные отправленны, с Вами скоро свжутся по Вашему запросу")
        } else {
            alert("Возникла ошибка" + data)
        }
    })
});