class Game{
    constructor(){

    }

    getState(){
        var stateRef = database.ref('gameState');
        stateRef.on("value", function(data){
            stateStorage = data.val();
        })
    }

    updateState(state){
        database.ref('/').update({
            gameState: state
        })
    }

    start(){
        if(stateStorage === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
            //form.hide();
        }
    }

    play(){
        form.hide();
        Player.getPlayerDetails();
        if(playerData !== undefined){
            for(var plr in playerData){
                text(playerData[plr].name + " : " + playerData[plr].distance, 300, 300);
            }
        }
    }
}