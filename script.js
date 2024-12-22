let boxsWeight = document.querySelectorAll("#choose-main-diet .box");
let boxsWeightArray = Array.from(boxsWeight);
let checked;
boxsWeight.forEach((box)=>{
    box.onclick=(ele)=>{
        removeActive(boxsWeight)
        ele.target.classList.add('active');
        checked=ele.target.dataset.index;
        

    }
})


function clickFirstNext()
{
    for(let i=0;i<boxsWeightArray.length;i++)
    {
      if(boxsWeightArray[i].dataset.index===checked)
      document.location.href=`${boxsWeightArray[i].dataset.href}.html`
   
    }

}
//remove class active
function removeActive(items)
{
    items.forEach(element => {
        element.classList.remove('active');
    });
}




// add health goals
let boxshealth = document.querySelectorAll("#Health-Goals .box");
let boxshealthArray = Array.from(boxshealth);
let checkclicked=false;
boxshealth.forEach((box)=>{
    box.onclick=(ele)=>{
        ele.target.classList.add('active');
        checkclicked = true;
        

    }
})

function clicksecondNext()
{
      if(checkclicked)
      {
        document.location.href = "yourprofile.html"
      }
}

//remove class active
