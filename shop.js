const man = [
  {
    id: 1,
    name: "Áo thun Mando unisex",
    code: "TC1025011BA",
    price: "250.000",
    image: "./img/ao1.jpg",
    newPrice: "240.000",
  },

  {
    id: 2,
    name: "Áo sơ mi giấu cúc",
    code: "TC1025011BA",
    price: "398.000",
    image: "./img/ao2.jpg",
    newPrice: "300.000",
  },

  {
    id: 3,
    name: "Jacket da",
    code: "TC1025011BA",
    price: "300.000",
    image: "./img/ao3.jpg",
    newPrice: "240.000",
  },

  {
    id: 4,
    name: "Hoodie nỉ bông",
    code: "TC1025011BA",
    price: "400.000",
    image: "./img/ao4.jpg",
    newPrice: "350.000",
  },
];
const women = [
  {
    id: 1,
    name: "Chân váy chữ A",
    code: "TC1025011BA",
    price: "250.000",
    image: "./img/nu1.jpg",
    newPrice: "200.000",
  },

  {
    id: 2,
    name: "Quần giả váy KMG",
    code: "TC1025011BA",
    price: "398.000",
    image: "./img/nu2.jpg",
    newPrice: "350.000",
  },

  {
    id: 3,
    name: "Áo Blazer",
    code: "TC1025011BA",
    price: "300.000",
    image: "./img/nu3.jpg",
    newPrice: "250.000",
  },

  {
    id: 4,
    name: "Áo sơ mi",
    code: "TC1025011BA",
    price: "400.000",
    image: "./img/nu4.jpg",
    newPrice: "350.000",
  },
];

function listTable() {
  var html = "";
  for (i in man) {
    html + "<tr>";
    html += "<td>" + man[i].id + "</td>";
    html += "<td>" + man[i].code + "</td>";
    html += "<td>" + man[i].name + "</td>";
    html +=
      "<td><img src=" + man[i].image + " style=height:50px;width:50px></td>";
    html += "<td>" + man[i].price + "</td>";
    html += "<td>" + man[i].newPrice + "</td>";
    html += "</tr>";
    document.getElementById("tbl").innerHTML = html;
  }
}
function women1() {
  var html = "";
  for (i in women) {
    html + "<tr>";
    html += "<td>" + women[i].id + "</td>";
    html += "<td>" + women[i].code + "</td>";
    html += "<td>" + women[i].name + "</td>";
    html +=
      "<td><img src=" + women[i].image + " style=height:50px;width:50px></td>";
    html += "<td>" + women[i].price + "</td>";
    html += "<td>" + women[i].newPrice + "</td>";
    html += "</tr>";
  }

  document.getElementById("tbl").innerHTML = html;
}

function createProduct() {
  var productID = document.getElementById("productID").value;
  var productCode = document.getElementById("productCode").value;
  var productName = document.getElementById("productName").value;
  var productImage = document.getElementById("productImage").value;
  var productPrice = document.getElementById("productPri").value;
  var productDiscount = document.getElementById("productDis").value;
  var productGender = document.getElementById("productGender").value;

  var newProduct = {
    id: productID,
    code: productCode,
    name: productName,
    image: productImage,
    price: productPrice,
    newPrice: productDiscount,
  };

  if (productGender === "man") {
    man.push(newProduct);
  } else if (productGender === "women") {
    women.push(newProduct);
  }

  document.getElementById("productID").value = "";
  document.getElementById("productCode").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("productImage").value = "";
  document.getElementById("productPri").value = "";
  document.getElementById("productDis").value = "";

  show(productGender === "man" ? arr : women1);
}