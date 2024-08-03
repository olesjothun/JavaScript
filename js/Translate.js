
let translations;

async function getTranslation(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        translations = await response.json();



            /*
        axios.get(path).then(
            (response) => {
                translations = response.data;
                console.log(translations);
            },
            (error) => {
                console.log(error);
            }
        );*/
    }

    catch (error){
        alert(error);
    }
}