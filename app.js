var total=0;

function showBill(order,Price,quantity){

    var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);

			list1[x] = order;
			list2[x] = quantity;
			list3[x] = Price;
			

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			

			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			
            total+=Price;
            document.getElementById("total").innerHTML = "₹"+total;

			n++;
			x++;
    // console.log("executed hain ji");
    // console.log(order);
    // console.log(Price);
    // console.log(quantity);
}
var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];

		var n = 1;
		var x = 0;

		function AddRow(){

			
		}