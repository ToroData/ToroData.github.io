/*
function dateUnderline() {
    if(document.getElementById("date").id){
        document.getElementById("date").id = 'date_underline';
        document.getElementById("date_underline").style.textDecorationColor = "red";
    } else if(document.getElementById("date_underline").id) {
        document.getElementById("date_underline").id = 'date';
        console.log('Hecho');
    }
    }
*/


function dateUnderline() {
    document.getElementById("date").id = 'date_underline';
    document.getElementById("date_underline").style.textDecorationColor = "red";
    }
  
 /* 
function activitiesUnderline() {
    document.getElementById("activities").id = 'activities_underline';
    document.getElementById("activities_underline").style.textDecorationColor = "red";
    }*/

document.querySelector('#date').addEventListener('click', () => dateUnderline(event));

/*
document.querySelector('#date_underline').addEventListener('click', () => dateUnderline());*/

var Loading=(loadingDelayHidden=0)=>{let loading=null;const myLoadingDelayHidden=loadingDelayHidden;let imgs=[];let lenImgs=0;let counterImgsLoading=0;function incrementCounterImgs(){counterImgsLoading+=1;if(counterImgsLoading===lenImgs){hideLoading()}}function hideLoading(){if(loading!==null){loading.classList.remove('show');setTimeout(function(){loading.remove()},myLoadingDelayHidden)}}function init(){document.addEventListener('DOMContentLoaded',function(){loading=document.querySelector('.loading');imgs=Array.from(document.images);lenImgs=imgs.length;if(imgs.length===0){hideLoading()}else{imgs.forEach(function(img){img.addEventListener('load',incrementCounterImgs,false)})}})}return{'init':init}}
    
Loading(1000).init();
