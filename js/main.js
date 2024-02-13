
let counter=document.querySelectorAll('.counter')
let mdsa=Array.from(counter)
mdsa.map((mahadi)=>{
    let count=0

    function counterUp(){
        if(count <= mahadi.dataset.number){
            mahadi.innerHTML=count
            count++
        }
    }
    setInterval(()=>{
        counterUp()
    },mahadi.dataset.speed/mahadi.dataset.number)
})






























// let counter=document.querySelectorAll('.counter')
// let counterAll=Array.from(counter)
// counterAll.map((mama)=>{
//     let count= 0;
//     function counterUp(){
//         count++
//         if(count <= mama.dataset.number){
//             mama.innerHTML=count
//         }
//     }
//     let habib = setInterval(()=>{
//         counterUp()
//     },mama.dataset.speed /mama.dataset.number )
// })

