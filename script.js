const items=[
    {
        id:1,
        title:"Meat Pies  ",
        categary:"Dinner",
        price:84,
        Img:"Image/photo (11).jpg",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquam dignissimos ratione consequatur provident eaque, quas enim saepe maiores magnam."
    },
    {
        id:2,
        title:"Roast Meat",
        categary:"Dinner",
        price:84,
        Img:"Image/photo (7).jpg",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquam dignissimos ratione consequatur provident eaque, quas enim saepe maiores magnam."
    },  {
        id:3,
        title:" Eggs on Cakes",
        categary:"Breakfast",
        price:50,
        Img:"Image/photo (9).jpg",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquam dignissimos ratione consequatur provident eaque, quas enim saepe maiores magnam."
    },
    {
        id:4,
        title:"Burger",
        categary:"lunch",
        price:74,
        Img:"Image/photo (2).jpeg",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquam dignissimos ratione consequatur provident eaque, quas enim saepe maiores magnam."
    },
    {
        id:5,
        title:"Coffe",
        categary:"Breakfast",
        price:6,
        Img:"Image/photo (3).jpeg",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquam dignissimos ratione consequatur provident eaque, quas enim saepe maiores magnam."
    },
    {
        id:6,
        title:" Spaghetti",
        price:5,
        categary:"Dinner",
        Img:"Image/photo (4).jpeg",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquam dignissimos ratione consequatur provident eaque, quas enim saepe maiores magnam."
    },
    {
        id:7,
        title:"Sliced Vegetables",
        categary:"lunch",
        price:6,
        Img:"Image/photo (6).jpg",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquam dignissimos ratione consequatur provident eaque, quas enim saepe maiores magnam."
    },
    {
        id:8,
        title:"Grilled Meat ",
        categary:"lunch",
        price:5,
        Img:"Image/photo (7).jpg",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquam dignissimos ratione consequatur provident eaque, quas enim saepe maiores magnam."
    }
];
const wholeItems=document.querySelector('.MainItemSection');
const buttonE=document.querySelectorAll('.btn');
  
   window.addEventListener('DOMContentLoaded',function(){
    Manue(items);
});
buttonE.forEach(function(btn) {
    btn.addEventListener("click",(e)=>{
        const categary=e.currentTarget.dataset.id;
        const manueCategary=items.filter((manuItem)=>{
            if(manuItem.categary===categary){
                return manuItem;
            }
        });
            if (categary==="all") {
                Manue(items);
                
            }
            else{
                Manue(manueCategary)
            }
        })
    
    
})
// buttonE.addEventListener("click",(e)=>{
//     const categary = e.currentTarget.dataset.id;
//     console.log(categary);
// })
function Manue(manueItemsArr) {
    let displayItems=manueItemsArr.map((itm)=>{
        return `<div class="LeftItem">
        <div class="Image">
        <img src="${itm.Img}" alt="No show">
    </div>
    <div class="explanationItem">
        <div class="explaneHead">
        <h1>${itm.title}</h1>
        <span>$${itm.price}</span></div>
        <p>${itm.desc}.</p>
    </div>
    </div>`
       });
       displayItems=displayItems.join('');
    wholeItems.innerHTML=displayItems;
    
}