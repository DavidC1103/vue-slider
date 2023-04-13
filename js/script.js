const {createApp} = Vue;
import image from './dbImage.js'
console.log(image);


createApp({
data(){
    return{
        image,
        counter : 0,
    }
},

methods:{
    nextPre(next){
        //faccio funziona lo slide aumentando e diminuendo il contatore
        if(next)this.counter++;
        else this.counter--;

        //faccio il controllo per per lo slide
        /*
        if(this.counter === this.image.lenght){
            this.counter = 0;  
        }
        if(this.counter < 0) this.counter = this.image.lenght -1 
        
        */
        console.log(this.counter);
        }
    }

}).mount('#app')