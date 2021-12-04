const graph = document.getElementById('graph');

(async()=>{
    graph.innerHTML="";
    const response = await fetch('http://api.nbp.pl/api/cenyzlota/last/30?format=json');
    const data = await response.json();
    const {min,max} = findMinMax(data);
    const dataWithIndex = data.map((el,idx)=>[el,idx]);
    for (const [priceAndDate,index] of dataWithIndex) {
        const element = document.createElement('div');
        //element.innerText = `${priceAndDate.data}${priceAndDate.cena}`;
        //element.style.minHeight = `${priceAndDate.cena / graphHeight * 100}%`;
        //element.style.height = `${priceAndDate.cena / graphHeight * 100}%`;
        const child = document.createElement("div");
        child.style.width = "80%";
        child.style.flexBasis = `${(priceAndDate.cena - min + 10) / (max + 20) * 500}%`; //"50%";
        child.style.backgroundColor = `rgb(${65 + index * 4}, 6, ${173 - index * 4})`;
        element.appendChild(child);
        graph.appendChild(element);

    }
})()

function findMinMax(data){
    const prices = data.map((el)=>el.cena);
    return {
        min:Math.min(...prices),
        max:Math.max(...prices)
    }
}