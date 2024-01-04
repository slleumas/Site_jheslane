const sliderResp = document.querySelector('.sliderResp');
const leftArrowResp = document.querySelector('.leftResp');
const rightArrowResp = document.querySelector('.rightResp');
const indicatorResp = document.querySelector('.controlsResp ul');

var sectionRespIndex = 0;
var seltsliderResp = 0;

function selectpointRespIndex() {
    document.querySelector('.controlsResp .pointselectResp').classList.remove('pointselectResp');
    sliderResp.style.transform = 'translate(' + (sectionRespIndex) * -25 + '%)';
}


setInterval(() => {
    ProxRespImag()

}, 5000)
function ProxRespImag() {
    seltsliderResp++
    if (seltsliderResp > 3) {
        seltsliderResp = -1
    }
    sectionRespIndex = (seltsliderResp < 3) ? seltsliderResp + 1 : 3;
    selectpointRespIndex();
    indicatorResp.children[sectionRespIndex].classList.add('pointselectResp');

}


document.querySelectorAll('.controlsResp li').forEach(function (indicatorResp, indResp) {
    indicatorResp.addEventListener('click', function () {
        sectionRespIndex = indResp;
        selectpointRespIndex();
        indicatorResp.classList.add('pointselectResp');
    });
});

leftArrowResp.addEventListener('click', function () {
    sectionRespIndex = (sectionRespIndex > 0) ? sectionRespIndex - 1 : 0;
    selectpointRespIndex();
    indicatorResp.children[sectionRespIndex].classList.add('pointselectResp');

});
rightArrowResp.addEventListener('click', function () {
    sectionRespIndex = (sectionRespIndex < 3) ? sectionRespIndex + 1 : 3;
    selectpointRespIndex();
    indicatorResp.children[sectionRespIndex].classList.add('pointselectResp');


});
