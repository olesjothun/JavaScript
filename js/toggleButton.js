document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('myToggleButton');

    toggleButton.addEventListener('click', async function () {
        this.classList.toggle('active');
        // Additional state change actions can be performed here
        if (this.innerHTML == "Norwegian") {
            await getTranslation('https://localhost:7065/Translation?language=English');
            addObjectAndCreateGrid(json_forecast);
        }
        else {
            await getTranslation('https://localhost:7065/Translation?language=Norwegian');
            addObjectAndCreateGrid(json_forecast);
        }
        if (this.innerHTML == "Norwegian")
            this.innerHTML = "English";
        else this.innerHTML = "Norwegian";

    });
});