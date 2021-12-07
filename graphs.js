const graph = document.getElementById('graph');
const dateTime = document.getElementById('date');

(async()=>{
    graph.innerHTML="";
    const response = await fetch('https://api.nbp.pl/api/cenyzlota/last/30?format=json');
    const data = await response.json();
    const {min,max} = findMinMax(data);
    const dataWithIndex = data.map((el,idx)=>[el,idx]);
    for (const [priceAndDate,index] of dataWithIndex) {
        
        const element = document.createElement('div');
        element.innerText = `${priceAndDate.cena}`;
        //element.style.minHeight = `${priceAndDate.cena / graphHeight * 100}%`;
        //element.style.height = `${priceAndDate.cena / graphHeight * 100}%`;
        const child = document.createElement("div");
        child.style.width = "80%";
        child.style.flexBasis = `${(priceAndDate.cena - min + 10) / (max + 20) * 500}%`; //"50%";
        child.style.backgroundColor = `rgba(200, ${(priceAndDate.cena - min + 10) / (max + 20) * 550}, 10, 1)`;
        

        element.appendChild(child);
        graph.appendChild(element);
        
        
    }
    dateTime.innerText = `${data[0].data} - ${data[data.length-1].data}`
})()

function findMinMax(data){
    const prices = data.map((el)=>el.cena);
    return {
        min:Math.min(...prices),
        max:Math.max(...prices)
    }
}
