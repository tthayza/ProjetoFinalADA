import memory from "./memory.js";


export default async function getAllCaractersIcon(){
    
    try{
        
        return getAllCaracters()
        .then( data => createListElement(data))
        

    }catch{
        throw new Error('API error');
    }

}

export async function getAllCaracters(){
    try{
        
        return fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR')
        .then( async (response) => {
            const responseObject = await response.json()
            memory.save(responseObject.data);
            return responseObject.data
        })

    }catch{
        throw new Error('API error');
    }
}

function createListElement (listOfCharacters){
    let result = ''
    listOfCharacters.forEach(element => {
        result += `<li id="${element.displayName}" data-agent><a><img class="character-icon" src=${element.displayIcon}></a></li>`
    });
    
    return result
}

