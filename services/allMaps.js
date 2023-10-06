export default async function getAllMaps() {
    let result = ''
    try {

        return fetch('https://valorant-api.com/v1/maps')
            .then(async (response) => {
                const responseObject = await response.json()
                console.log(responseObject);
                return responseObject.data
            })
            .then(data => createListElement(data))

    } catch {
        throw new Error('Deu TCHUTCHU na API, ASSOPRA A FITA PRA VER SE VAI!');
    }

}

export function createListElement(listOfMaps) {
    let result = ''
    listOfMaps.forEach(element => {

        result += `<figure><img class="maps" src=${element.splash}> <p class="map-name">${element.displayName}</p></figure>`
    });

    result = "<section class='maps-container'>" + result + "</section>"
    return result

}

