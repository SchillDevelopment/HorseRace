$(function () {
    $("#button").on("click", function () {
        var span = $(this).find('span');
		setHorseRun(span);
        alert('THIS LOOKS BEST IN GOOGLE CHROME BROWSER!\n\nEvery 4 seconds a random horse will get $5 right now.\n\n Press F11 to run in full screen');
        setInterval(function () { setHorseRun(span) }, 10000);
		
    })
	
	$("#update").on("click", function () {
	
		var json_upload = "json_name=" + JSON.stringify({name:"John Rambo", time:"2pm"});
		var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
		xmlhttp.open("POST", "http://www.stcstakes.com/js/data.json", true);
		xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlhttp.send(json_upload);
	})
	

	
	

	
	

    function setHorseRun(span) {
		
		var gPK, gK,g1,g2,g3,g4 ,g5,g6,g7,g8 = 0;

        var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var myObj = JSON.parse(this.responseText);
				
				gPK = parseInt(myObj[0].amount,10);
				gK = parseInt(myObj[1].amount,10);
				g1 = parseInt(myObj[2].amount,10);
				g2 = parseInt(myObj[3].amount,10);
				g3 = parseInt(myObj[4].amount,10);
				g4 = parseInt(myObj[5].amount,10);
				g5 = parseInt(myObj[6].amount,10);
				g6 = parseInt(myObj[7].amount,10);
				g7 = parseInt(myObj[8].amount,10);
				g8 = parseInt(myObj[9].amount,10);
				
				
				

        $("#gradePK").text(gPK);
        $("#gradeK").text(gK);
        $("#grade1").text(g1);
        $("#grade2").text(g2);
        $("#grade3").text(g3);
        $("#grade4").text(g4);
        $("#grade5").text(g5);
        $("#grade6").text(g6);
        $("#grade7").text(g7);
        $("#grade8").text(g8);

        var gArray = [gPK, gK, g1, g2, g3, g4, g5, g6, g7, g8];

        var sortedArray = bubbleSort(gArray);


        for (var i = 0; i < sortedArray.length; i++) {
            var place = '';
			var placeNumber = '';
            switch (i) {

                case 9: place = 'First';placeNumber='1st Place'; break;
                case 8: place = 'Second';placeNumber='2nd Place'; break;
                case 7: place = 'Third';placeNumber='3rd Place'; break;
                case 6: place = 'Fourth';placeNumber='4th Place'; break;
                case 5: place = 'Fifth';placeNumber='5th Place'; break;
                case 4: place = 'Sixth';placeNumber='6th Place'; break;
                case 3: place = 'Seventh';placeNumber='7th Place'; break;
                case 2: place = 'Eighth';placeNumber='8th Place'; break;
                case 1: place = 'Ninth';placeNumber='9th Place'; break;
                case 0: place = 'Tenth';placeNumber='10th Place'; break;
            }



            if (sortedArray[i] == gPK) {
                $("#horsePK").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horsePK").addClass(place);
				$("#placePK").text(placeNumber);

            }
            if (sortedArray[i] == gK) {
                $("#horseK").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horseK").addClass(place);
				$("#placeK").text(placeNumber);

            }
            if (sortedArray[i] == g1) {
                $("#horse1").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse1").addClass(place);
				$("#place1").text(placeNumber);

            }
            if (sortedArray[i] == g2) {
                $("#horse2").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse2").addClass(place);
				$("#place2").text(placeNumber);
            }
            if (sortedArray[i] == g3) {
                $("#horse3").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse3").addClass(place);
				$("#place3").text(placeNumber);
            }
            if (sortedArray[i] == g4) {
                $("#horse4").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse4").addClass(place);
				$("#place4").text(placeNumber);
            }
            if (sortedArray[i] == g5) {
                $("#horse5").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse5").addClass(place);
				$("#place5").text(placeNumber);
            }
            if (sortedArray[i] == g6) {
                $("#horse6").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse6").addClass(place);
				$("#place6").text(placeNumber);
            }
            if (sortedArray[i] == g7) {
                $("#horse7").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse7").addClass(place);
				$("#place7").text(placeNumber);
            }
            if (sortedArray[i] == g8) {
                $("#horse8").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse8").addClass(place);
				$("#place8").text(placeNumber);
            }



        }
				
				
			}
		};
		xmlhttp.open("GET", "http://www.stcstakes.com/js/data.json", true);
		xmlhttp.send();

        


    }

});




function bubbleSort(arr) {//You need Two Loops for Bubble sort
    for (var i = 0; i < arr.length; i++) {//Outer Loop
        for (var j = 0; j < arr.length - 1; j++) {//Inner Loop
            if (arr[j] > arr[j + 1]) {
                var a = arr[j]
                var b = arr[j + 1]
                arr[j] = b
                arr[j + 1] = a
            }
        }
    }
    return arr;
}