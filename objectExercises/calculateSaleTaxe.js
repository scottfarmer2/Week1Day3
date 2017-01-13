var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function salesTaxeFromProvince(province, salesTaxObject) {
  return salesTaxObject[province];
}

function calculateSales(companyObject){
  var totalSales = 0;
  for (var i = 0; i < companyObject.length; i++){
    totalSales = totalSales + companyObject[i];
  }
  return totalSales;
}

function calculateTaxe(taxRate, totalSales){
  var totalTaxe = taxRate * totalSales;
  return totalTaxe;
}

//
function calculateSalesTax(salesData, taxRates) {
  var object = {};
  for (var i = 0; i < salesData.length; i++){
    var taxeRate = salesTaxeFromProvince(salesData[i]["province"], taxRates);
    var total = calculateSales(salesData[i]["sales"]);
    var taxeTotal = calculateTaxe(taxeRate, total);
    var name = salesData[i]["name"];
    if (object[name] == undefined){


    object[name] = {
      totalSales: total,
      totalTaxes: taxeTotal
    }
  }else{
      object[name]["totalSales"] += total;
      object[name]["totalTaxes"] += taxeTotal;
    }

  }
  console.log(object);


  return object;// Implement your code here
}

calculateSalesTax(companySalesData, salesTaxRates);
// var results = salesTaxReport(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/