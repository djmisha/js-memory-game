/*! JS Memory Game v0.0.1 | (c) 2021 Misha | MIT License | # */
(function () {
    var game = document.querySelector(".game");

    function dupeAndShuffleCards(cards) {
        let duplicateDeck = [];
        for (var i = 0; i < cards.length; i++) {
            var singleCard = cards[i];
            duplicateDeck.push(singleCard);
            duplicateDeck.push(singleCard);
        }
        var shuffleDeck = duplicateDeck.sort(() => Math.random() - 0.5);

        return shuffleDeck;
    }

    function createCardElements(cards) {
        for (var i = 0; i < cards.length; i++) {
            var cardName = cards[i].name;
            var cardImage = cards[i].img;
            var cardID = cards[i].id;

            var cardElement = document.createElement("div");
            cardElement.classList.add("back");
            cardElement.setAttribute("id", cardID);
            cardElement.setAttribute("name", cardName);
            cardElement.innerHTML = "<img src=" + cardImage + ">";

            game.appendChild(cardElement);
        }
    }

    function compareCards() {
        let placedCards = document.querySelectorAll(".game > div");
        var compareArray = [];
        for (let i = 0; i < placedCards.length; i++) {
            const card = placedCards[i];
            card.addEventListener("click", compare);
        }
        function compare(event) {
            compareArray.push(event.target);
            // pauseCard(event.target);
            console.log("clicked", event.target);
            if (compareArray.length === 2) {
                if (compareArray[0] === compareArray[1]) {
                    console.log("match");
                    compareArray.pop(compareArray[0]);
                    compareArray.pop(compareArray[1]);
                    event.target.remove();
                } else {
                    console.log("not match");
                    compareArray.pop(compareArray[0]);
                    compareArray.pop(compareArray[1]);
                }
            }
        }

        function pauseCard(card) {
            // card.removeEventListener("click", compare);
        }
        // console.log(placedCards);
    }

    var cards = [
        {
            name: "php",
            img:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
            id: 1,
        },
        {
            name: "css3",
            img:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
            id: 2,
        },
        {
            name: "html5",
            img:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
            id: 3,
        },
        {
            name: "jquery",
            img:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
            id: 4,
        },
        {
            name: "javascript",
            img:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
            id: 5,
        },
        {
            name: "node",
            img:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
            id: 6,
        },
        {
            name: "photoshop",
            img:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
            id: 7,
        },
        {
            name: "python",
            img:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
            id: 8,
        },
        {
            name: "rails",
            img:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
            id: 9,
        },
        {
            name: "sass",
            img:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
            id: 10,
        },
        {
            name: "sublime",
            img:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
            id: 11,
        },
        {
            name: "wordpress",
            img:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
            id: 12,
        },
    ];

    let deck = dupeAndShuffleCards(cards);
    createCardElements(deck);
    compareCards();
})();
