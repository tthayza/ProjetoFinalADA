export default class memory{
    

    static save (charactersList) {
        localStorage.setItem("ValorantCharacters", JSON.stringify(charactersList));
    }

    static read (){

        try{
            return(JSON.parse(localStorage.ValorantCharacters));
        }catch{
            throw new Error('Erro ao acessar o localStorage');
        }
        
    }

}