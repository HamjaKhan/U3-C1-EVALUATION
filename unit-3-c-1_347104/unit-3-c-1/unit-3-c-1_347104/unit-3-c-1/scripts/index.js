//store the products array in localstorage as "products"

document.querySelector("#products").addEventListener("submit",storeProduct)

function Product(t,d,p,i){
    this.type=t
    this.desc=d
    this.price=p
    this.image=i
}

function storeProduct(){
    event.preventDefault()
    let form=document.getElementById("products")
    let type=form.type.value
    let desc=form.desc.value
    let price=form.price.value
    let image=form.image.value
    form.type.value=""
    form.desc.value=""
    form.price.value=""
    form.image.value=""

    let p1=new Product(type,desc,price,image)

    let data=JSON.parse(localStorage.getItem("products"))||[]
    data.push(p1)
    localStorage.setItem("products",JSON.stringify(data))
    // console.log(data)
}
