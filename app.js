
var sex1,sex2 ,name1, name2, age1 ,age2,result ;

 result=document.querySelector('.result');

var postnamem=document.querySelector('.mn')
var postnamef=document.querySelector('.fn')

var display=document.querySelector('.cont-result')

document.querySelector('#btn1').addEventListener('click', function(){

 name1=document.querySelector('#name1').value
 sex1=document.querySelector('#sex1').value
 age1=document.querySelector('#age1').value
})

document.querySelector('#btn2').addEventListener('click', function(){

 name2=document.querySelector('#name2').value
 sex2=document.querySelector('#sex2').value
 age2=document.querySelector('#age2').value

})

document.querySelector('#result').addEventListener('click', function(){

		display.style.display='block'
		postnamef.textContent=name2;
		postnamem.textContent=name1
	
})