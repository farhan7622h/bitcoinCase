console.log("hi");
document.getElementById('btn').addEventListener('click',()=>{
  
  if(body.style.backgroundColor!='white'){
    body.style.backgroundColor = 'white'
    body.style.color = 'black'

    let a = document.querySelectorAll('.color')
    a.forEach(element => {
        element.style.color = 'black'
    });
    let col = document.getElementById('btn')
     col.innerText= 'dark Mode'
     col.style.backgroundColor = 'white'
     col.style.fontWeight ='bold'
}
else{
    body.style.backgroundColor = 'black'
    body.style.color = 'white'

    let a = document.querySelectorAll('.color')
    a.forEach(element => {
        element.style.color = 'white'
    });
    let col = document.getElementById('btn')
     col.innerText= 'light Mode'
     col.style.backgroundColor = 'black'
     col.style.fontWeight ='100'
}
})
