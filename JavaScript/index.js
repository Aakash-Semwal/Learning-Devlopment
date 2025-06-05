function createRectangle(){
    return rectangle = {
        length : 1 ,
        breadth : 2 ,

        draw(){
            console.log("Draw a Rectangle");
        }
    };
}

let rectangleObj1 = createRectangle() ;

if('length' in rectangleObj1){
    console.log('Yes');
}
else{
    console.log('NO');
}