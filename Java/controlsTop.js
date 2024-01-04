const sliderTop = document. querySelector('.sliderTop');
const leftArrow = document. querySelector('.left');
const rightArrow = document. querySelector('.right');
const indicatore = document.querySelector('.controls ul');

var sectionIndex = 0;
var seltslider = 0;

function selectpointIndex(){
    document.querySelector('.controls .pointselect').classList.remove('pointselect');
    sliderTop.style.transform = 'translate('+(sectionIndex) * -25 +'%)';  
}


setInterval(()=>{
    ProxImag()
    
    }, 5000)
function ProxImag(){
    seltslider++
    if (seltslider>3){
        seltslider=-1
    }
    sectionIndex = (seltslider<3)?seltslider + 1:3;
    selectpointIndex();
    indicatore.children[sectionIndex].classList.add('pointselect');
    
    }


document.querySelectorAll('.controls li').forEach(function(indicator,ind) {
    indicator.addEventListener('click',function(){
    sectionIndex = ind;
    selectpointIndex();
    indicator.classList.add('pointselect');
    });
});

leftArrow.addEventListener('click',function(){
    sectionIndex = (sectionIndex>0)?sectionIndex - 1:0;
    selectpointIndex();
    indicatore.children[sectionIndex].classList.add('pointselect');
   
});
rightArrow.addEventListener('click',function(){
    sectionIndex = (sectionIndex<3)?sectionIndex + 1:3;
    selectpointIndex();
    indicatore.children[sectionIndex].classList.add('pointselect');
    
   
});

