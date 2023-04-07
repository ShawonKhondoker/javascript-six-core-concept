//.......loop...for ...While ...do- Whille.....

//........for-loop..........

    for (let i = 0;i < 5;i ++){
        console.log(i);
    }

    //........Whille loop.........

    let i =0;
    while(i < 8){
        console.log(i);
        i ++;
    }

    //........Break Statement.....

    for (let i = 0; i < 7; i++){
        if (i === 6){
            break;
        }
        console.log(i);
    }

    //.......for loop .........

    let sum = 0;
    for(let i = 0;i < 8;i ++){
        sum ++;
    }
    console.log(sum);

    
    let sum1 = 0;
    for(let i = 1;i <+ 10;i ++){
        sum1 += i;
    }
    console.log(sum1);

    let sum2 = 0;
    for (let i = 3; i <= 5; i++) {
        sum2 += i;
        
    }
    console.log(sum2);

    //.....Continue ........

    for(let i = 0; i < 6; i++){
        if(i !== 3){
            continue;
        }
        console.log("My name is " +i)
    }
