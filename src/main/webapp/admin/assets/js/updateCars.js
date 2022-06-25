$(function() {
	let id = localStorage.getItem("id");
	$.ajax({
		url: "UpdateCars",
		type: "POST",
		data: {
			dt: id
		},
		success: function(result) {
			let data = JSON.parse(result);
			$("#carname").val(data.carName);
			$("#prod-price").val("₹"+data.price);
			$("#brand").val(data.brand);
			$("#model").val(data.model);
			$("#transmission").val(data.transmissionType);
			$("#fuel").val(data.fuelType);
			$("#year").val(data.year);
			$("#distanceTraveled").val(data.distanceTravel+"km");
			$("#extColour").val(data.exteriorColour);
			$("#intColour").val(data.interiorColour);
			$("#seats").val(data.seatingCapacity);
			$("#prod-description").val(data.description);
			$("#prod-finance").val(data.finance);
			$("#prod-buyfromus").val(data.whyBuyFromUs);
			$("#prod-warrenty").val(data.warranty);
			$(".image_1").attr("src",data.imageBash64_1);
			$(".image_2").attr("src",data.imageBash64_2);
			$(".image_3").attr("src",data.imageBash64_3);
			$(".image_4").attr("src",data.imageBash64_4);
			$(".image_5").attr("src",data.imageBash64_5);
		}
	});
})