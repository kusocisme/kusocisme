ourteamstyle = {
    build: function () {
        let object = this;

        console.log("Building Ourteamstyle...");
        object.renderLinkCard();
        object.renderExerciseView();
    },

    renderLinkCard: function () {
        let cardList = document.querySelectorAll(`.card[href-card]`);
        cardList.forEach(card => {
            card.onclick = function () {
                let link = card.getAttribute("href-card");
                window.open(link);
            };
        });
    },

    renderExerciseView: function () {
        let exerciseView = document.getElementById("exerciseView");
        let closeMenuleft = document.getElementById("closeMenuleft");
        let menuleft = document.querySelector("#menuleft .container");

        exerciseView.onclick = function () {
            menuleft.style.width = "15rem";
        };

        closeMenuleft.onclick = function () {
            menuleft.style.width = "0px";
        };
    },
};