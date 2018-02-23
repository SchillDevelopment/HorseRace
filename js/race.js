$(function () {
    $("#button").on("click", function () {
        var span = $(this).find('span');
        setHorseRun(span);
        alert('The Saint Cecilia Stakes has Begun!\n\nEvery 4 seconds a random horse will get $5 right now.\n\n Press F11 to run in full screen\n\nThis will be Data Driven eventually, just is a read-only Demo right now. \nBugs: \n1.)The background and horses look cheap/weird I think...  ');
        setInterval(function () { setHorseRun(span) }, 4000);

    })

    function setHorseRun(span) {

        var rand = Math.floor(Math.random() * 10) + 1

        var gPK = parseInt($("#gradePK").text(), 10);
        var gK = parseInt($("#gradeK").text(), 10);
        var g1 = parseInt($("#grade1").text(), 10);
        var g2 = parseInt($("#grade2").text(), 10);
        var g3 = parseInt($("#grade3").text(), 10);
        var g4 = parseInt($("#grade4").text(), 10);
        var g5 = parseInt($("#grade5").text(), 10);
        var g6 = parseInt($("#grade6").text(), 10);
        var g7 = parseInt($("#grade7").text(), 10);
        var g8 = parseInt($("#grade8").text(), 10);



        $("#gradePK").removeClass("flashit");
        $("#gradeK").removeClass("flashit");
        $("#grade1").removeClass("flashit");
        $("#grade2").removeClass("flashit");
        $("#grade3").removeClass("flashit");
        $("#grade4").removeClass("flashit");
        $("#grade5").removeClass("flashit");
        $("#grade6").removeClass("flashit");
        $("#grade7").removeClass("flashit");
        $("#grade8").removeClass("flashit");

        switch (rand) {
            case 1: gPK = gPK + 5; $("#gradePK").addClass("flashit"); break;
            case 2: gK = gK + 5; $("#gradeK").addClass("flashit"); break;
            case 3: g1 = g1 + 5; $("#grade1").addClass("flashit"); break;
            case 4: g2 = g2 + 5; $("#grade2").addClass("flashit"); break;
            case 5: g3 = g3 + 5; $("#grade3").addClass("flashit"); break;
            case 6: g4 = g4 + 5; $("#grade4").addClass("flashit"); break;
            case 7: g5 = g5 + 5; $("#grade5").addClass("flashit"); break;
            case 8: g6 = g6 + 5; $("#grade6").addClass("flashit"); break;
            case 9: g7 = g7 + 5; $("#grade7").addClass("flashit"); break;
            case 10: g8 = g8 + 5; $("#grade8").addClass("flashit"); break;
        }


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


        for (var i = 0; i < sortedArray.length + 1; i++) {
            var place = '';
            switch (i) {

                case 0: place = 'First'; break;
                case 1: place = 'Second'; break;
                case 2: place = 'Third'; break;
                case 3: place = 'Fourth'; break;
                case 4: place = 'Fifth'; break;
                case 5: place = 'Sixth'; break;
                case 6: place = 'Seventh'; break;
                case 7: place = 'Eighth'; break;
                case 8: place = 'Ninth'; break;
                case 9: place = 'Tenth'; break;
            }



            if (sortedArray[i] == gPK) {
                $("#horsePK").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horsePK").addClass(place);

            }
            if (sortedArray[i] == gK) {
                $("#horseK").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horseK").addClass(place);

            }
            if (sortedArray[i] == g1) {
                $("#horse1").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse1").addClass(place);

            }
            if (sortedArray[i] == g2) {
                $("#horse2").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse2").addClass(place);

            }
            if (sortedArray[i] == g3) {
                $("#horse3").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse3").addClass(place);

            }
            if (sortedArray[i] == g4) {
                $("#horse4").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse4").addClass(place);

            }
            if (sortedArray[i] == g5) {
                $("#horse5").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse5").addClass(place);

            }
            if (sortedArray[i] == g6) {
                $("#horse6").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse6").addClass(place);

            }
            if (sortedArray[i] == g7) {
                $("#horse7").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse7").addClass(place);

            }
            if (sortedArray[i] == g8) {
                $("#horse8").removeClass("First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth");
                $("#horse8").addClass(place);

            }


            //alert($('#horsePK').attr('class'));

        }

    }

});

function bubbleSort(arr) {//You need Two Loops for Bubble sort
    for (var i = 0; i < arr.length; i++) {//Outer Loop
        for (var j = 0; j < arr.length - 1; j++) {//Inner Loop
            if (arr[j] < arr[j + 1]) {
                var a = arr[j]
                var b = arr[j + 1]
                arr[j] = b
                arr[j + 1] = a
            }
        }
    }
    return arr;
}