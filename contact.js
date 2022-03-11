let button = document.querySelectorAll(".contact");

console.log(button);

button.forEach((item)=> {
    item.addEventListener("click", () => {
    
        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", "wrapperAboutService");
        wrapper.setAttribute("id", "wrapperAboutServiceId");
        wrapper.addEventListener("click", function (event) {
            let elem = event.target;
    
            if(elem.id == "wrapperAboutServiceId") {
                elem.remove();
            }
            
        })
    
        const content = document.createElement("div");
        content.setAttribute("class", "contentAboutService");
        let list = document.createElement("ul");

        let item1 = document.createElement("li");
        let textForEmail = document.createElement("span");
        textForEmail.textContent = "Электроннаяя почта: "
        let email = document.createElement("a");
        email.setAttribute("href", "mailto:info-develop@yandex.ru");
        email.textContent = "info-develop@yandex.ru";
        item1.append(textForEmail);
        item1.append(email)


        let item2 = document.createElement("li");
        let textForPhone = document.createElement("span");
        textForPhone.textContent = "Номер телефона: "
        let phone = document.createElement("a");
        phone.setAttribute("href", "tel:+79779207740");
        phone.textContent = "+79779207740";
        item2.append(textForPhone);
        item2.append(phone);
       
        let item3 = document.createElement("li");
        let textAdress = document.createElement("p");
        textAdress.textContent = " г.Мытищи, ул. 2-ая Институтская 18";
        item3.append(textAdress);

        list.append(item1);        
        list.append(item2);
        list.append(item3);


        let map = document.createElement("div");
        let scriptForMaps = document.createElement("iframe");
        scriptForMaps.setAttribute("src", "https://yandex.ru/map-widget/v1/?um=constructor%3A304d74ce422fb3968b3691f919cc51184346237050b97f707cf07372bd3c0193&amp;source=constructor");
        scriptForMaps.setAttribute("width", "1081");
        scriptForMaps.setAttribute("height", "400");
        scriptForMaps.setAttribute("frameborder", "0");

        map.append(scriptForMaps);


        content.append(list);
        content.append(map);

        const exit = document.createElement("button");
        exit.setAttribute("class", "close-button")
        exit.addEventListener("click", function() {
            const elem = document.getElementById("wrapperAboutServiceId");
            elem.remove();
        })
        content.append(exit);
        wrapper.append(content);
        document.body.append(wrapper);
    });
})
