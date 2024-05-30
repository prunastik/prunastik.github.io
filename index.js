const containers = document.querySelectorAll(".container");

const allRadios = document.querySelectorAll('.radio img');
function leftSelected(indexS){
	allRadios[indexS].setAttribute('src', 'radio.png');
	allRadios[indexS+1].setAttribute('src', 'radio2.png');
}
function rightSelected(indexS){
	allRadios[indexS].setAttribute('src', 'radio2.png');
	allRadios[indexS+1].setAttribute('src', 'radio.png');
}
window.addEventListener('resize', ()=>{

	containers.forEach((e)=>{
		e.scroll({
			top: 0,
			left: 0,
			behavior: "auto"
		});
	});
});

containers.forEach((e)=>{
	e.addEventListener('scrollend', ()=>{
		if(e.scrollLeft<e.offsetWidth/2){
			e.scroll({
				top: 0,
				left: 0,
				behavior: "smooth"
			});
			e.parentNode.children[1].children[0].setAttribute('src', 'radio.png');
			e.parentNode.children[1].children[1].setAttribute('src', 'radio2.png');
		}else{
			e.scroll({
				top: 0,
				left: e.offsetWidth,
				behavior: "smooth"
			});
			e.parentNode.children[1].children[1].setAttribute('src', 'radio.png');
			e.parentNode.children[1].children[0].setAttribute('src', 'radio2.png');
		}
	});
	e.addEventListener('mouseover', ()=>{
		if(window.innerWidth > 1024){
			e.scroll({
				top: 0,
				left: e.offsetWidth,
				behavior: "auto"
			});
		}
	});
	e.addEventListener('mouseout', ()=>{
		if(window.innerWidth > 1024){
			e.scroll({
				top: 0,
				left: 0,
				behavior: "auto"
			});
		}
	});
});

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const slider = document.getElementById("slider");

leftArrow.addEventListener('click', ()=>{
	if(slider.scrollLeft != 0){
		slider.scroll({
			top: 0,
			left: slider.scrollLeft-200,
			behavior: "smooth"
		});
	}
});
rightArrow.addEventListener('click', ()=>{
	if(slider.scrollLeft != slider.offsetWidth){
		slider.scroll({
			top: 0,
			left: slider.scrollLeft+200,
			behavior: "smooth"
		});
	}
});