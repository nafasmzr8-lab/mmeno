 var menuItems = [
  { id: 1, name: "اسپرسو", category: "نوشیدنی گرم", price: "90,000", desc: "قهوه‌ی غلیظ و خالص، یک شات کامل", img: "img/30913ca8-6b61-4b34-baf1-b533348afa5a.jpg" },
  { id: 2, name: "لاته", category: "نوشیدنی گرم", price: "150,000", desc: "اسپرسو با شیر بخارداده و کف نرم", img: "img/d44a18e3-79dd-44c4-9cbd-af22196898d2.jpg" },
  { id: 3, name: "کاپوچینو", category: "نوشیدنی گرم", price: "150,000", desc: "تعادل کامل بین قهوه، شیر و کف", img: "img/5b3252f6-fb66-4b20-8881-148c72a64642.jpg" },
  { id: 4, name: "موکا", category: "نوشیدنی گرم", price: "180,000", desc: "اسپرسو، شکلات تلخ و شیر گرم", img: "img/350290d2-344b-43c9-aa74-030db29fc1ba.jpg" },
  { id: 5, name: "آمریکانو", category: "نوشیدنی گرم", price: "100,000", desc: "اسپرسو رقیق‌شده با آب داغ", img: "img/d8d5668e-5cc5-4240-8cc2-7cf328430f6d.jpg" },
  { id: 6, name: "فلت وایت", category: "نوشیدنی گرم", price: "120,000", desc: "قهوه‌ی غلیظ با لایه‌ی نازک شیر", img: "img/d1c7c8ef-6235-4b99-afc2-7fe39a81763d.jpg" },

  { id: 7, name: "آیس لاته", category: "نوشیدنی سرد", price: "280,000", desc: "لاته‌ی سرد با یخ خرد شده", img: "img/915a9b89-0690-4103-b2b6-9917a349add9.jpg" },
  { id: 8, name: "کلد برو", category: "نوشیدنی سرد", price: "120,000", desc: "دم‌کرده‌ی ۱۲ ساعته با آب سرد", img: "img/7facf9ab-340e-4a3d-8a9d-d345e38241db.jpg" },
  { id: 9, name: "لیموناد نعنا", category: "نوشیدنی سرد", price: "290,000", desc: "لیمو تازه، نعنا و کمی عسل", img: "img/3566d6c3-97dd-4fe1-8bec-9e997f5a6930.jpg" },
  { id: 10, name: "آیس‌آمریکانو", category: "نوشیدنی سرد", price: "180,000", desc: "اسپرسو سرد با آب و یخ", img: "img/64f7c273-f255-43c2-8e95-a7af298f6c8c.jpg" },
  { id: 11, name: "اسموتی توت‌فرنگی", category: "نوشیدنی سرد", price: "360,000", desc: "توت‌فرنگی تازه، ماست و عسل", img: "img/0ceab183-e835-4bc0-89e0-748dc8669d76.jpg" },
  { id: 12, name: "آیس موکا", category: "نوشیدنی سرد", price: "230,000", desc: "قهوه، شکلات و شیر سرد با کف", img: "img/5de324f2-6b75-4d39-acf5-b18b029384c6.jpg" },

  { id: 13, name: "چیزکیک", category: "دسر", price: "300,000", desc: "چیزکیک نیویورکی با سس توت قرمز", img: "img/d3593ca3-c17d-4eb1-9073-64ece1b23107.jpg" },
  { id: 14, name: "براونی", category: "دسر", price: "360,000", desc: "براونی گرم با یک اسکوپ بستنی وانیل", img: "img/7e92b636-5b65-430c-8bd0-3daec8589507.jpg" },
  { id: 15, name: "تیرامیسو", category: "دسر", price: "300,000", desc: "لایه‌های کرم مالارپونه و قهوه", img: "img/f51dc8a7-5844-47a2-b0c6-e0601b675341.jpg" },
  { id: 16, name: "کروسان بادام", category: "دسر", price: "380,000", desc: "کروسان پر شده با کرم بادام", img: "img/4a1d2b08-06ae-4c91-932d-a9218518d87a.jpg" },
  { id: 17, name: "کوکی شکلاتی", category: "دسر", price: "180,000", desc: "کوکی خانگی با تکه‌های شکلات تلخ", img: "img/dce77eaf-3631-4653-8e4d-d6d16152c2e2.jpg" },

  { id: 18, name: "املت آویژه", category: "صبحانه", price: "350,000", desc: "املت با قارچ، پنیر و نان تست", img: "img/73520127-8267-4c11-ac87-f1a0fb2c778b.jpg" },
  { id: 19, name: "نان و پنیر و گردو", category: "صبحانه", price: "280,000", desc: "سبد صبحانه‌ی سنتی با عسل و مربا", img: "img/6648c659-77d2-4081-ad25-5a85379f8b8b.jpg" },
  { id: 20, name: "پنکیک عسل", category: "صبحانه", price: "380,000", desc: "پنکیک نرم با عسل و کره‌ی بادام‌زمینی", img: "img/9822aaa5-161e-4242-81de-2ec380597e5d.jpg" },
  { id: 21, name: "آووکادو تست", category: "صبحانه", price: "430,000", desc: "نان تست با آووکادو له‌شده و تخم‌مرغ آب‌پز", img: "img/0197f3c4-a2d1-44dc-a6e4-c594672b68bc.jpg" }
];

var activeCategory = "همه";

var menuGrid = document.getElementById("menuGrid");
var searchInput = document.getElementById("searchInput");
var emptyState = document.getElementById("emptyState");
var categoryTabs = document.getElementById("categoryTabs");

function getCategoryClass(category) {
  if (category === "نوشیدنی گرم") { return "cat-hot"; }
  if (category === "نوشیدنی سرد") { return "cat-cold"; }
  if (category === "دسر") { return "cat-dessert"; }
  if (category === "صبحانه") { return "cat-breakfast"; }
  return "";
}

function renderMenu(items) {
  var html = "";
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var catClass = getCategoryClass(item.category);

    html += '<div class="menu-item">';

    if (item.img === "") {
      html += '  <div class="item-media">📷 عکس ' + item.name + '</div>';
    } else {
      html += '  <img class="item-media" src="' + item.img + '" alt="' + item.name + '">';
    }

    html += '  <div class="item-content">';
    html += '    <div class="item-top">';
    html += '      <span class="item-name">' + item.name + '</span>';
    html += '      <span class="item-leader"></span>';
    html += '      <span class="item-price">' + item.price + ' تومان</span>';
    html += '    </div>';
    html += '    <p class="item-desc">' + item.desc + '</p>';
    html += '    <span class="item-category ' + catClass + '">' + item.category + '</span>';
    html += '  </div>';
    html += '</div>';
  }

  menuGrid.innerHTML = html;

  if (items.length === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }
}

function filterMenu() {
  var searchText = searchInput.value.trim().toLowerCase();
  var result = [];

  for (var i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];

    var matchesCategory = (activeCategory === "همه" || item.category === activeCategory);
    var matchesSearch = item.name.toLowerCase().indexOf(searchText) !== -1;

    if (matchesCategory && matchesSearch) {
      result.push(item);
    }
  }

  renderMenu(result);
}

searchInput.addEventListener("input", filterMenu);

var tabButtons = categoryTabs.getElementsByClassName("tab");

for (var j = 0; j < tabButtons.length; j++) {
  tabButtons[j].addEventListener("click", function () {
    for (var k = 0; k < tabButtons.length; k++) {
      tabButtons[k].classList.remove("active");
    }
    this.classList.add("active");
    activeCategory = this.getAttribute("data-category");
    filterMenu();
  });
}

renderMenu(menuItems);