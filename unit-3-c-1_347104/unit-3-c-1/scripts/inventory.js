function append(){
    let data=JSON.parse(localStorage.getItem("products"))||[]
    let container=document.getElementById("all_products")
    container.innerHTML=null
    data.forEach(function(el,index){
        console.log(el)
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.image
        let p1=document.createElement("p")
        p1.innerText=el.type
        let p2=document.createElement("p")
        p2.innerText=el.desc
        let p3=document.createElement("p")
        p3.innerText=el.price
        let btn=document.createElement("button")
        btn.setAttribute("id","add_product")
        btn.addEventListener("click",function(){
            remove(index)
            
        })
        btn.innerText="Remove"       
        

        div.append(img,p1,p2,p3,btn)
        container.append(div)
        

        
    })
}
append()
function remove(index)
{
    let data=JSON.parse(localStorage.getItem("products"))||[]
    let newData=data.filter(function(el,i){
        if(i===index)
        {
            let trash=JSON.parse(localStorage.getItem("trash"))||[]
            trash.push(el)
            localStorage.setItem("trash",JSON.stringify(trash))
        }
        else{
            return i!==index
        }
    })
    localStorage.setItem("products",JSON.stringify(newData))||[]
    append()
    console.log(newData)
}

let addbutton=document.createElement("button")
addbutton.innerText="Add More Product"
addbutton.setAttribute("id","add_more_product")

document.querySelector("#navbar").append(addbutton)
document.getElementById("add_more_product").addEventListener("click",myfun)
function myfun(){
window.location.href="index.html"
}