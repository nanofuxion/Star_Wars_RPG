    // character stats
    var gameCharacters = [
        lumiya = {
            "card": $("<div>"),
            "title": "Dark Lady",
            "name": "Lumiya",
            "age (est)": 11000,
            "face": "images/faces/6874a308ce17ee5f57153b11386c8c6a--cosplay-star-wars-star-wars-sith.jpg",
            "health": "150"
        },
        vader = {
            "card": $("<div>"),
            "title": "Darth Vader",
            "name": "Anakin",
            "age (est)": 11000,
            "face": "images/faces/064c787492d244b4ae4f7c1f6a994f0d--pixel-memories.jpg",
            "health": "190"
        },
        luke = {
            "card": $("<div>"),
            "title": "Jedi Master",
            "name": "Luke",
            "age (est)": 11000,
            "face": "images/faces/04e9df434712f89f99156c542636f1b8.jpg",
            "health": "150"
        },
        yoda = {
            "card": $("<div>"),
            "title": "Jedi Master",
            "name": "Yado",
            "age (est)": 11000,
            "face": "images/faces/f8e4f02165322df6814766a0b70840c0.jpg",
            "health": "over 9000"
        }




    ]

    // store Character card divs
    var charDivs = [];

    // has the game started
    var isStarted = false;


    $(document).ready(function() {

        //add each character card to page
        for (let i = 0; i < gameCharacters.length; i++) {

            //create card 
            gameCharacters[i].card = $("<div>");
            gameCharacters[i].card.addClass("card charcard float-left col-lg-2 col-md-6 col-sm-12 mx-auto selectable");
            gameCharacters[i].card.attr({ "data-name": gameCharacters[i].name, "data-health": gameCharacters[i].health });

            //img
            var charImage = $("<img>");
            charImage.attr("src", gameCharacters[i].face);
            charImage.addClass("card-img-top rounded");
            charImage.appendTo(gameCharacters[i].card);

            //div
            var charCdBody = $("<div>");
            charCdBody.addClass("card-body");
            charCdBody.appendTo(gameCharacters[i].card);

            //p title
            var charCdP = $("<p>");
            charCdP.addClass("d-flex justify-content-center");
            charCdP.text("Title: " + gameCharacters[i].title);
            charCdP.appendTo(charCdBody);

            //p Name 
            var charCdP = $("<p>");
            charCdP.addClass("d-flex justify-content-center");
            charCdP.text("Name: " + gameCharacters[i].name);
            charCdP.appendTo(charCdBody);

            //p 
            var charCdP = $("<p>");
            charCdP.addClass("d-flex justify-content-center Health");
            charCdP.text("Health: " + gameCharacters[i].health);
            charCdP.appendTo(charCdBody);


            $(".charshere").after(gameCharacters[i].card);

            // ads character divs to an array for easy manipulation
            charDivs.push($(gameCharacters[i].card));

        }

        $(".selectable").on("click", function() {
            // $(".goodguy").clone().appendTo("#outPopUp");
            if ($(this).hasClass("badones") && (isStarted == true))
                console.log($(this));
            $(".goodguy").clone().appendTo("#outPopUp");
            $(this).clone().appendTo("#outPopUp");
        });


        $(".selectable").on("click", function() {
            if (!isStarted) {
                $(this).removeClass("selectable");
                $(this).addClass("goodguy");
                makebad();
                isStarted = true;
            }
        });


        function makebad() {
            if (!isStarted) {
                $(".badshere").after($(".selectable"));
                $(".selectable").addClass("badones");
                $(".selectable").removeClass("selectable");
            }
        }
    });