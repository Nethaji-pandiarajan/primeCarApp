$(function() {
	//displayImages();
	bindEvents();
});
function bindEvents(){
	$("#brand").on('change', function() {
		let brand = $("#brand").val();
		let model = document.getElementById("models");
		model.innerHTML = "";
		let optionArr;
		if (brand == "Audi") {
			optionArr = ['null|---Select model---', "A3 | A3", "A3 Convertible | A3 Convertible", "A5 | A5", "A6 | A6", "A8 | A8", "RS5 | RS5", "Q5 | Q5", "Q3 | Q3", "Q7 | Q7", "TT | TT", "R8 | R8"];
		} else if (brand == "BMW") {
			optionArr = ['null|---Select model---', "3 Series | 3 Series", "X5 | X5", "118D | 118D", "530I | 530I", "X3 | X3", "X5 | X5", "5 Series | 5 Series", "X1 | X1", "X4 | X4", '6GT | 6GT', '330LI | 330LI', '320D | 320D', '320I | 320I', '520D | 520D', '530D | 530D']
		} else if (brand == "Mercedes Benz") {
			optionArr = ['null|---Select model---', 'GLA|GLA', 'GLE|GLE', 'S400|S400', 'S400|S400', 'B200|B200', 'GLE 250d|GLE 250D', 'GLE 350d|GLE 350D', 'C220D|C220D', 'E250D|E250D', 'GLS350D|GLS350D', 'C200|C200'];
		} else if (brand == "Skoda") {
			optionArr = ['null|---Select model---', 'Superb | Superb', 'Octavia | Rapid', 'rapid | Rapid'];
		} else if (brand == "Land Rover") {
			optionArr = ['null|---Select model---', 'Discovary|Discovary'];
		} else if (brand == "Mini") {
			optionArr = ['null|---Select model---', 'Cooper s|Cooper s'];
		} else if (brand == "Porsche") {
			optionArr = ['null|---Select model---', 'Macan|Macan', 'Cayenne|Cayenne', 'Cayman|Cayman', 'Panamera|Panamera'];
		} else if (brand == "Jaguar") {
			optionArr = ['null|---Select model---', 'F peace|F peace', 'XF|XF'];
		} else if (brand == "Range Rover") {
			optionArr = ['null|---Select model---', 'Evoque|Evoque', 'Velar|Velar'];
		} else if (brand == "Volvo") {
			optionArr = ['null|---Select model---', 'v40|V40', 'xc90|Xc90', 'xc60|Xc60', 'xc40|Xc40'];
		} else if (brand == "Jeep") {
			optionArr = ['null|---Select model---', 'Compass limited|Compass limited'];
		} else if (brand == "KIA") {
			optionArr = ['null|---Select model---', 'Seltos|Seltos'];
		} else if (brand == "Hyundai") {
			optionArr = ['null|---Select model---', 'creta|Creta'];
		} else if (brand == "Toyota") {
			optionArr = ['null|---Select model---', 'Innova crysta|Innova crysta', 'Cambry hybrid|Cambry hybrid'];
		} else if (brand == "LEXUS") {
			optionArr = ['null|---Select model---', 'Nh300x|Nh300x'];
		} else if (brand == "Mahindra") {
			optionArr = ['null|---Select model---', 'XUV500|XUV500'];
		} else if (brand == "Ford") {
			optionArr = ['null|---Select model---', 'Endeacour|Endeacour'];
		}
		for (let option in optionArr) {
			let pair = optionArr[option].split("|");
			var newOption = document.createElement("option");
			newOption.value = pair[0];
			newOption.innerHTML = pair[1];
			model.options.add(newOption);
		}
	});
	$(document).on('click',".searchFilter",function(){
		let brand = $("#brand").val();
		let model = $("#models").val();
		let fuelType = $("#fueltype").val();
		let transmissionType = $("#transmissiontype").val();
		let fromYear = $("span.irs-from").text();
		let toYear = $("span.irs-to").text();
		let priceChoice = $("#selectPrice").val().trim();

		let value = {brand:brand,
					model:model,fuelType:fuelType,
					transmissionType:transmissionType,
					fromYear:fromYear.replace(" ",""),toYear:toYear.replace(" ",""),
					priceChoice:priceChoice
					};
		localStorage.setItem("filterData",JSON.stringify(value));
		window.location = "buying.html"
	});
}