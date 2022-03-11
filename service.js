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
    exit.setAttribute("class", "close-button");
    
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

    let title = document.createElement("h3");
    title.setAttribute("class", "text-center");
    title.textContent = `Поддержка сайтов`;

    let textOne = document.createElement("p");
    textOne.textContent = `Поддержка сайта — комплекс задач, который связан с обеспечением стабильной работы проекта. 
    В большинстве случаев речь идёт о технической поддержке. Наполнение контентом, изменение дизайна.`
    let textTwo = document.createElement("p");
    textTwo.textContent = `Коммерческим компаниям важно понять, что если сайт является частью воронки продаж, за ним нужно следить круглосуточно. 
    Это всё равно, что оставить магазин бытовой техники без присмотра. Кто угодно может зайти внутрь, взять товары и не заплатить за них.`
    let titleForText = document.createElement("h4");
    titleForText.textContent = `Преимущества`;

    let list = document.createElement('ul');
    list.setAttribute("class", "serviceList");
    let itemOne = document.createElement("li");
    itemOne.textContent = `Постоянный контроль`;
    let itemTwo = document.createElement("li");
    itemTwo.textContent = `Неограниченное масштабирование`;
    let itemThree = document.createElement("li");
    itemThree.textContent = `Оптимизация`;
    let itemFour = document.createElement("li");
    itemFour.textContent = `Обновление контента`;

    list.append(itemOne);
    list.append(itemTwo);
    list.append(itemThree);
    list.append(itemFour);

    const exit = document.createElement("button");
    exit.setAttribute("class", "close-button");

    content.append(title);
    content.append(textOne);
    content.append(textTwo);
    content.append(titleForText);
    content.append(list);

    content.append(exit);
    wrapper.append(content);
    
    exit.addEventListener("click", function() {
        const elem = document.getElementById("wrapperAboutServiceId");
        elem.remove();
    })
    
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

    let title = document.createElement("h3");
    title.setAttribute("class", "text-center")
    title.textContent = `Функциональная доработка`;

    let textOne = document.createElement("p");
    textOne.textContent = `Создание новых модулей или иных функциональных 
    возможностей, 
    как на стороне сервера (PHP,Node.js,MySQL), так и со стороны клиента (JavaScript, HTML,CSS)`;

    let textTwo = document.createElement("p");
    textTwo.textContent = `Например у Вас уже есть рабочий, эффективный сайт, 
    привлекающий достаточное количество посетителей, но возникают свежие 
    идеи, меняются условия работы в интернет, и Вы осознаете, что для дальнейшего 
    развития проекта требуются новые возможности. Возникает необходимость в 
    дополнительных разделах, 
    информационных блоках, новых сервисах и требуется доработка сайта.`;

    let textThree = document.createElement("p");
    textThree.textContent = `Частно возникают ситуации, когда одна разовая доработка 
    может повлечь за собой комплексную модернизацию всего сайта поэтому, прежде чем 
    заказывать услугу по доработке нужно точно определитьс
    целями и задачами предстоящего изменения, это поможет сэкономить время и средства.`;

    let titleForList = document.createElement("h4");
    titleForList.textContent = `Цена зависит от:`;

    let list = document.createElement("ul");
    list.setAttribute("class", "serviceList");

    let item1 = document.createElement("li");
    item1.textContent = `Срочности`;
    let item2 = document.createElement("li");
    item2.textContent = `Требуемых задач`;
    let item3 = document.createElement("li");
    item3.textContent = `Сложности задач`;

    list.append(item1);
    list.append(item2);
    list.append(item3);

    content.append(title);
    content.append(textOne);
    content.append(textTwo);
    content.append(textThree);
    content.append(titleForList);
    content.append(list);

    const exit = document.createElement("button");
    exit.setAttribute("class", "close-button")
    exit.addEventListener("click", function() {
        const elem = document.getElementById("wrapperAboutServiceId");
        elem.remove();
    })
    wrapper.append(content);
    content.append(exit);
    
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

    let title = document.createElement("h3");
    title.setAttribute("class", "text-center")
    title.textContent = `Корпоративный сайт`;

    let text1 = document.createElement("p");
    text1.textContent = `- Это большая презентация предприятия в интернете. 
    Корпоративный сайт содержит в себе подробную информацию о компании, 
    сфере деятельности, предложения для покупателей и оптовиков.`;

    let titleListWithContent = document.createElement("h4");
    titleListWithContent.textContent = `Корпоративный сайт — это инструмент для:`;

    let listWithContent = document.createElement("ul");
    listWithContent.setAttribute("class", "serviceList");
    let itemWithContent1 = document.createElement("li");
    itemWithContent1.textContent = `Привлечения розничных покупателей`;
    let itemWithContent2 = document.createElement("li");
    itemWithContent2.textContent = `Оптовых партнеров`;
    let itemWithContent3 = document.createElement("li");
    itemWithContent3.textContent = `Инструмент повышения узнаваемости бренда`;
    let itemWithContent4 = document.createElement("li");
    itemWithContent4 = `увеличения лояльности клиентов.`;
    listWithContent.append(itemWithContent1);
    listWithContent.append(itemWithContent2);
    listWithContent.append(itemWithContent3);
    listWithContent.append(itemWithContent4);

   
    
    let text2 = document.createElement("p");
    text2.textContent = `Корпоративный сайт – это серьезный механизм, который может стать полезным инструментом для бизнеса.`;

    let listQuestionWhyCorpSite = document.createElement("ul");
    listQuestionWhyCorpSite.setAttribute("class","serviceList");
    let itemQuestionWhyCorpSite1 = document.createElement("li");
    itemQuestionWhyCorpSite1.textContent = `Информирование - Действующие и потенциальные потребители, 
    партнеры и сотрудники узнают информацию о компании. Задача корпоративного сайта максимально полно и 
    позитивно рассказать о компании, производстве или товаре.`;
    let itemQuestionWhyCorpSite2 = document.createElement("li");
    itemQuestionWhyCorpSite2.textContent = `Продвижение бренда и формирование имиджа - С помощью информации о компании, отзывов клиентов, яркого 
    контента можно формировать мнение потребителя о продукте.`;
    let itemQuestionWhyCorpSite3 = document.createElement("li");
    itemQuestionWhyCorpSite3.textContent = `Работа с корпоративными ценностями - 
    Новостные рассылки, обновления, push-уведомления – все это позволит сотрудникам 
    оперативно получать информацию об изменениях в компании, 
    а также задавать настроение внутри коллектива.`;

    listQuestionWhyCorpSite.append(itemQuestionWhyCorpSite1);
    listQuestionWhyCorpSite.append(itemQuestionWhyCorpSite2);
    listQuestionWhyCorpSite.append(itemQuestionWhyCorpSite3);

    content.append(title);
    content.append(text1);
    content.append(titleListWithContent);
    content.append(listWithContent);
    content.append(text2);
    content.append(listQuestionWhyCorpSite);

    const exit = document.createElement("button");
    exit.setAttribute("class", "close-button")
    exit.addEventListener("click", function() {
        const elem = document.getElementById("wrapperAboutServiceId");
        elem.remove();
    })
    wrapper.append(content);
    content.append(exit);
    document.body.append(wrapper);
});