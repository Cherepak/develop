const aboutVisitka = document.getElementById("aboutVisitka");
const aboutServers = document.getElementById("aboutServers");
const aboutFunctionUpgrate = document.getElementById("aboutFunctionUpgrate");
const aboutMarket = document.getElementById("aboutMarket");

aboutVisitka.addEventListener("click", function () {
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
    const exit = document.createElement("button");
    exit.setAttribute("class", "sent-button");
    
    content.setAttribute("class", "contentAboutService");
    let title = document.createElement("h3");
    title.setAttribute("class", "text-center");
    title.textContent = "Сайт визитка";
    let textOne = document.createElement("p");
    textOne.textContent = `Небольшой сайт, как правило, состоящий из одной 
    (или нескольких) веб-страниц и содержащий основную информацию об организации, 
    частном лице, компании, 
    товарах или услугах, прейскуранты, контактные данные.`; 

    let textTwo = document.createElement("p");
    textTwo.textContent = `Главная задача такого сайта – предоставить 
    пользователю основной перечень информации о компании или частном лице.`

    let textThree = document.createElement("p");
    textThree.textContent = `Цена за разработку "Сайта визитки" начинается от 
    10 000 рублей. Цена зависит от следующих факторов:`

    let list = document.createElement("ul");
    list.setAttribute("class", "serviceList");
    let item1 = document.createElement("li");
    item1.textContent = "Сложности поставленной задачи";
    let item2 = document.createElement("li");
    item2.textContent = "Объем данных";
    let item3 = document.createElement("li");
    item3.textContent = "Функционал";
    let item4 = document.createElement("li");
    item4.textContent = "Срочность";

    list.append(item1);
    list.append(item2);
    list.append(item3);
    list.append(item4);

    content.append(title);
    content.append(textOne);
    content.append(textTwo);
    content.append(textThree);
    content.append(list);


    exit.addEventListener("click", function() {
        const elem = document.getElementById("wrapperAboutServiceId");
        elem.remove();
    })
    wrapper.append(content);
    content.append(exit);
    exit.textContent  = "Закрыть";
    document.body.append(wrapper);
});

aboutServers.addEventListener("click", function () {
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
    const exit = document.createElement("button");
    exit.setAttribute("class", "sent-button");
    content.append(exit);
    wrapper.append(content);
    
    exit.addEventListener("click", function() {
        const elem = document.getElementById("wrapperAboutServiceId");
        elem.remove();
    })
    
    exit.textContent  = "Закрыть";
    document.body.append(wrapper);
});

aboutFunctionUpgrate.addEventListener("click", function () {
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
    const exit = document.createElement("button");
    exit.setAttribute("class", "sent-button")
    exit.addEventListener("click", function() {
        const elem = document.getElementById("wrapperAboutServiceId");
        elem.remove();
    })
    wrapper.append(content);
    content.append(exit);
    exit.textContent  = "Закрыть";
    document.body.append(wrapper);
});

aboutMarket.addEventListener("click", function () {
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
    const exit = document.createElement("button");
    exit.setAttribute("class", "sent-button")
    exit.addEventListener("click", function() {
        const elem = document.getElementById("wrapperAboutServiceId");
        elem.remove();
    })
    wrapper.append(content);
    content.append(exit);
    exit.textContent  = "Закрыть";
    document.body.append(wrapper);
});