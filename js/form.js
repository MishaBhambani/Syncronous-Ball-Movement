class Form {
    constructor(){
        this.playerNameInput = createInput("name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing");
        title.position(500, 50);

        this.playerNameInput.position(500, 200);
        this.button.position(500, 500);
        
        this.button.mousePressed(()=>{
            this.playerNameInput.hide();
            this.button.hide();

            player.name = this.playerNameInput.value();
            playerCount += 1;
            player.index = playerCount;
            player.updatePlayer();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(500, 350);
        });
    }

    hide(){
        this.playerNameInput.hide();
        this.button.hide();
        this.greeting.hide();
    }
}