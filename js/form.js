class Form{
    constructor(){}
   display(){
       
       var title=createElement("h2");
       title.html("CAR RACING GAME");
       title.position(550,30);
       
       var input=createInput("");
       input.attribute("placeholder","NAME")
       input.position(510,150);
       input.size(300,30);
       
       var button=createButton("PLAY");
       button.position(600,300)
       button.size(100,50);

       button.mousePressed(function(){
           input.hide();
           button.hide();

           var name=input.value();
           var name1=name.toUpperCase();
           
           playerCount=playerCount+1;
           player.update(name);
           player.updateCount(playerCount);

           var greeting=createElement("h2");
           greeting.html("HELLO "+name1)
           greeting.position(600,300)
       })

       
   }
 

}