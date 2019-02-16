console.log("===Modulle Pattern===");

//IIFE
const MODULE=(function (){
    var APP="Demo";

    var box={};
    
    box.count=0;


   box.addCount=function(){
       box.count++;
       console.log(box.count);
       return box.count;
   }

   box.resetCount=function(){
        box.count=0;
        return box.count;
    }


   //
    return {add:box.addCount,reset:box.resetCount};

    
    console.log(APP,box);
})();


