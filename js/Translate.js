
let translations;

async function getTranslation(path) {
    try {/* Fetch working OK
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        translations = await response.json();*/

        let result = await axios.get(path);
        if (result.status == 200) translations = result.data;
        else alert("Error in Axios get: " + result.status);

        //if (res.status == 200) getResult(res);

        //GetAxios(path).then(result => translations = result.data);
            /* Async not working...
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

/*
async function GetAxios(path) {
    let res = await axios.get(path);
    return res;

}
*/

/*
function getResult(res) {
    translations = res.data;
}
*/