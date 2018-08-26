var tabNumber = 1;

function clickMenu(id, next) {
    console.log(tabNumber)
    switch(tabNumber){
        case 1:
            break;
        case 2:
            tabNumber -= 1;
            var menu = document.getElementById("hamburger-3");
            menu.classList.remove("is-active");
            
            var currentTab = document.getElementById("tab1");
            currentTab.classList.remove("hide-tab-left");

            var currentTab2 = document.getElementById("tab2");
            currentTab2.classList.add("hide-tab-right");

            var currentMenu = document.getElementById("menu2");
            currentMenu.classList.remove("show-menu");

            setTimeout(function() {
                currentMenu.classList.add("hide");
            }, 300);
            break;
        case 3:
            tabNumber -= 1;
            var currentMenu = document.getElementById("menu3");
            currentMenu.classList.remove("show-menu");

            var currentTab = document.getElementById("tab2");
            currentTab.classList.remove("hide-tab-left");

            var currentTab2 = document.getElementById("tab3");
            currentTab2.classList.add("hide-tab-right");

            var cart = document.getElementById("cart");
            cart.classList.remove("change-color-icon-cart");

            var cartRound = document.getElementById("roundValue");
            cartRound.classList.remove("change-color-round-value");

            setTimeout(function() {
                currentMenu.classList.add("hide");
            }, 300);
            break;
    }
}

// onclick
function clickNext(id) 
{
    console.log(tabNumber)
    var obj = document.getElementById(id);
    obj.classList.add("click-animation");

    // before 150 ms, start hidding tab
    setTimeout(function() {
        switch(tabNumber){
            case 1:
                var currentTab = document.getElementById("tab" + tabNumber);
                currentTab.classList.add("hide-tab-left");
        
                var nextTab = document.getElementById("tab" + (tabNumber + 1));
                nextTab.classList.remove("hide");
                nextTab.classList.remove("hide-tab-right");
        
                var nextMenu = document.getElementById("menu" + (tabNumber + 1));
                nextMenu.classList.remove("hide");
                nextMenu.classList.add("show-menu");
                tabNumber += 1;
                break;
            case 2:
                var currentTab = document.getElementById("tab" + tabNumber);
                currentTab.classList.add("hide-tab-left");

                var nextTab = document.getElementById("tab" + (tabNumber + 1));
                nextTab.classList.remove("hide");
                nextTab.classList.remove("hide-tab-right");
                
                var nextMenu = document.getElementById("menu" + (tabNumber + 1));
                nextMenu.classList.remove("hide");
                nextMenu.classList.add("show-menu");

                var cart = document.getElementById("cart");
                cart.classList.add("change-color-icon-cart");

                var cartRound = document.getElementById("roundValue");
                cartRound.classList.add("change-color-round-value");

                tabNumber += 1;
                break;
        }

        var menu = document.getElementById("hamburger-3");
        menu.classList.add("is-active");
    }, 150)

    // before 500 ms, remove class animation
    setTimeout(function() {
        obj.classList.remove("click-animation");
    }, 500);
}

function clickProduct(id){
    var product1 = document.getElementById("product1");
    var desProd1 = document.getElementById("descriptionProduct1");
    var rank = document.getElementById("rank");
    desProd1.classList.toggle("height-0-hidden");
    product1.classList.toggle("more-shadow");
    rank.classList.toggle("height-0-hidden");
}

var products = [];

function clickButtonEffect (id) {
    if (!e) var e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();

    var obj = document.getElementById(id);
    obj.classList.add("click-animation-new");

    setTimeout(function() {
       obj.classList.remove("click-animation-new");
    }, 400);

    var cart = document.getElementById("roundValue");

    products.push({});

    cart.innerHTML = products.length;
}


function clickOption (id, type) {
    var obj = document.getElementById(id);
    obj.classList.add("click-animation");

    setTimeout(function() {
       obj.classList.remove("click-animation");
    }, 200);

    if (!e) var e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
}

function clickOpenCart () {
    var obj = document.getElementById("cartTotals");
    obj.classList.toggle("opened");
    var obj = document.getElementById("iconUpDown");
    obj.classList.toggle("fa-chevron-down");
    var obj = document.getElementById("iconUpDown");
    obj.classList.toggle("fa-chevron-up");
    var obj = document.getElementById("bodyCartTotals");
    obj.classList.toggle("opened");
}

function myScroll() {
    var body = document.body,
    html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    
    var obj = document.getElementById("menu1");
    obj.style = "height: " + height + "px";
    var obj = document.getElementById("menu2");
    obj.style = "height: " + height + "px";
    var obj = document.getElementById("menu3");
    obj.style = "height: " + height + "px";
}