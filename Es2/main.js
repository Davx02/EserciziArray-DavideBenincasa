function num (){
    let numeri = ``;
    for (let i=1; i <= 100; i++){
            if (i % 10 == 0){
                numeri = numeri + i + `\n`;
            } else{
                numeri = numeri + i + ` `;
            }
    } 
    console.log(numeri);        
}

num();