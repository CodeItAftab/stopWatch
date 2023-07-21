
let [h,m,s,ms,mms]=[0,0,0,0];
click=0;
let stopInterval;

function stopwatch(){
    
    ms++;
    if(ms==100){
        s++;
        ms=0;
        if(s==60){
            m++;
            s=0;
            if(m==60){
                h++;
                m=0;
            }
        }
    }
    let hour,min,sec,msec;
        hour=h<10?'0'+h:h;
        min=m<10?'0'+m:m;
        sec=s<10?'0'+s:s;
        if(ms==0){
            msec=ms+'0';
        }
        msec=ms<10?'0'+ms:ms;

        document.getElementById('hour').innerHTML=hour;
        document.getElementById('min').innerHTML=min;
        document.getElementById('sec').innerHTML=sec;
        console.log(hour+':'+min+':'+sec+':'+msec);
}

function watchStart(){
     stopInterval=setInterval(stopwatch, 10);
}


function flag(){
    let hour,min,sec,msec;
        hour=h<10?'0'+h:h;
        min=m<10?'0'+m:m;
        sec=s<10?'0'+s:s;
        if(ms==0){
            msec=ms+'0';
        }
        msec=ms<10?'0'+ms:ms;
    document.getElementById('time-log').innerHTML+=hour+':'+min+':'+sec+'<br>';
}

function pause(){
    if(click!=0){

        clearInterval(stopInterval);
        click=0;
        start();
    }
}









function start(){
    let btn=document.getElementById('btn-2').innerHTML;
    if(btn=='Start'){
        document.getElementById('btn-2').innerHTML='Stop';
        document.getElementById('btn-2').style.width='70px'
        
        document.getElementById('btn-3').style.display='block';
        document.getElementById('btn-1').style.display='block';
        if(click===0){
            watchStart();
            click++;
        }

        
        
        
        
    }
    else{
        document.getElementById('btn-2').innerHTML='Start';
        document.getElementById('btn-2').style.width='90px'
        
        
        document.getElementById('btn-3').style.display='none';
        document.getElementById('btn-1').style.display='none';
        if(click!=0){
            clearInterval(stopInterval);
            [h,m,s,ms]=[0,0,0,0];
            document.getElementById('hour').innerHTML='00';
            document.getElementById('min').innerHTML='00';
            document.getElementById('sec').innerHTML='00';
            document.getElementById('time-log').innerHTML="";

            click=0;
        }
        
        // document.getElementById('log').style.transition='all 0.5s ease-in-out';
        // document.getElementById('log').style.visibility='hidden';
        




    }
}

//keyboard controls 

document.addEventListener('keydown',e=>{
    console.log(e);
    if(e.key===' ' || e.key==='Enter'){
        start();
    }
    else if(e.key.toLowerCase==='p'){
        Pause();
    }
})




t=0;
// let k=setInterval(start,400);


// k=new Date();

// console.log(k)
// setInterval(() => {
//     k=new Date();

// console.log(k)
// }, 1000);













