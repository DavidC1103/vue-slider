const {createApp} = Vue;
import image from './dbImage.js'
console.log(image);


createApp({
data(){
    return{
        image,
        counter : 0,
    }
}

}).mount('#app')