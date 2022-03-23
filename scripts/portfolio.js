let clothes = document.getElementById("clothes");
let construction = document.getElementById("construction");
let insurance = document.getElementById("insurance");
let production = document.getElementById("production");


clothes.addEventListener("click", () => {//Ссылки на сайты с одеждой и аксессуары

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
    const title = document.createElement("h3");
    title.setAttribute("class", "text-center");
    title.textContent = "Перейдите по любой ссылке";

    const list = document.createElement("ul");

    const item1 = document.createElement("li");
    const portenLink = document.createElement("a");
    portenLink.setAttribute("href", "./portfolio/porten/index.html")
    portenLink.setAttribute("target","_blank");
    portenLink.textContent = "Porten";
    item1.append(portenLink);
    list.append(item1);


    const exit = document.createElement("button");
    exit.setAttribute("class", "close-button")
    exit.addEventListener("click", function() {
        const elem = document.getElementById("wrapperAboutServiceId");
        elem.remove();
    })

    content.append(exit);
    content.append(title);
    content.append(list);
    wrapper.append(content);
    document.body.append(wrapper);
})



construction.addEventListener("click", () => {//ссылки на строительные компании

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
    const title = document.createElement("h3");
    title.setAttribute("class", "text-center");
    title.textContent = "Перейдите по любой ссылке";

    const list = document.createElement("ul");

    const item1 = document.createElement("li");
    const windowLinShebekinok = document.createElement("a");
    windowLinShebekinok.setAttribute("href", "./portfolio/окнашебекино/index.html")
    windowLinShebekinok.setAttribute("target","_blank");
    windowLinShebekinok.textContent = "Окна шебекино";
    item1.append(windowLinShebekinok);
    list.append(item1);


    const exit = document.createElement("button");
    exit.setAttribute("class", "close-button")
    exit.addEventListener("click", function() {
        const elem = document.getElementById("wrapperAboutServiceId");
        elem.remove();
    })
    
    content.append(exit);
    content.append(title);
    content.append(list);
    wrapper.append(content);
    document.body.append(wrapper);
})



insurance.addEventListener("click", () => {//ссылки на страховые компании

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
    const title = document.createElement("h3");
    title.setAttribute("class", "text-center");
    title.textContent = "Перейдите по любой ссылке";

    const list = document.createElement("ul");

    const item1 = document.createElement("li");
    const strahovkiShebekino = document.createElement("a");
    strahovkiShebekino.setAttribute("href", "./portfolio/strahovkashebekino/index.html")
    strahovkiShebekino.setAttribute("target","_blank");
    strahovkiShebekino.textContent = "Страховка в Шебекино";
    item1.append(strahovkiShebekino);
    list.append(item1);


    const exit = document.createElement("button");
    exit.setAttribute("class", "close-button")
    exit.addEventListener("click", function() {
        const elem = document.getElementById("wrapperAboutServiceId");
        elem.remove();
    })
    
    content.append(exit);
    content.append(title);
    content.append(list);
    wrapper.append(content);
    document.body.append(wrapper);
})



production.addEventListener("click", () => {//ссылки на производственные компании

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
    const title = document.createElement("h3");
    title.setAttribute("class", "text-center");
    title.textContent = "Перейдите по любой ссылке";

    const list = document.createElement("ul");

    const item1 = document.createElement("li");
    const translight = document.createElement("a");
    translight.setAttribute("href", "./portfolio/translight/index.html")
    translight.setAttribute("target","_blank");
    translight.textContent = "Translight";
    item1.append(translight);
    list.append(item1);

    const item2 = document.createElement("li");
    const tehnohim = document.createElement("a");
    tehnohim.setAttribute("href", "./portfolio/технохим/index.html")
    tehnohim.setAttribute("target","_blank");
    tehnohim.textContent = "Технохим";
    item2.append(tehnohim);
    list.append(item2);



    const exit = document.createElement("button");
    exit.setAttribute("class", "close-button")
    exit.addEventListener("click", function() {
        const elem = document.getElementById("wrapperAboutServiceId");
        elem.remove();
    })
    
    content.append(exit);
    content.append(title);
    content.append(list);
    wrapper.append(content);
    document.body.append(wrapper);
})
