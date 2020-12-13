const bizarreStringIncrementer = (str)=> {
    const strLength = str.length;
    /* if bizarrestring end with string, append 1 and return  */
    if( isNaN(str[strLength-1]) ) return str + 1; 

    /*if string ends with number -> loop from end and find the index where number begins */
    let i= 0;
    for(i=strLength-1; i>=0; i--){
        if(isNaN(str[i])) break;
    }
    /* extract the number and add 1 */
    const number = parseInt(str.slice(i+1,strLength))+ 1 ;  
    return str.slice(0,i+1) + number;
}
try {
    console.log(bizarreStringIncrementer('foo'));
}catch (err) {
    console.log(err)
}

/*
bizarreStringIncrementer('foo23');
bizarreStringIncrementer('foo0041');
bizarreStringIncrementer('foo9');
bizarreStringIncrementer('foo099');
bizarreStringIncrementer('f99oo');
bizarreStringIncrementer('f99oo23');
bizarreStringIncrementer('f99oo099');
bizarreStringIncrementer('f99oo0099');
*/

