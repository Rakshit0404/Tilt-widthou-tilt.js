var outer=document.querySelector('#outer');
outer.addEventListener('mousemove',coordinates, false);

function coordinates(ev){
    var get=ev.target.getBoundingClientRect();
    var x=ev.clientY-get.top;
    var y=ev.clientX-get.left;
    var coord=document.querySelector('#coord');
    coord.innerHTML=`X-coord.: ${x} & Y-coord.:${y}`;
}


outer.addEventListener('mousemove',(ev)=>{
    outer=document.querySelector('#outer');
    var i=outer.clientHeight/60;/* 60 because the rotation range is -30deg to 30deg*/
    var get=ev.target.getBoundingClientRect();
    var x=ev.clientY-get.top;
    var y=ev.clientX-get.left;
    var x1=((x/i)-30);/*-30 to get the deg from 0deg to 60deg all the way to -30deg to 30deg*/
    var y1=0-((y/i)-30);
    outer.style.transform=`perspective(100em)  rotateX(${x1}deg) rotateY(${y1}deg) scale(0.96,0.96)`;
});

/*to bring back div to normal position*/

outer.addEventListener('mouseleave',()=>{
    outer=document.querySelector('#outer');
    outer.style.transform="perspective(100em)  rotateX(0deg) rotateY(0deg) scale(1,1)";
})