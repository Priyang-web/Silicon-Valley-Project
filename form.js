class Form{
    constructor(){
       this.input = createInput("").attribute("placeholder","Name");
       this.button = createButton('Next');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.ins = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    hide2(){
        this.greeting.hide()
        this.ins.hide()
    }
    display() {
        this.title.html("STICK MAN");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'black');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
       
        var name = this.input.value;
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
           
            this.greeting.html("Hello " + name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
            this.ins.html("Press 'P' to start");
            this.ins.position(400, 500);
            this.ins.style('font-size', '70px');
            this.ins.style('color', 'black');
        });
     
      

    }
}