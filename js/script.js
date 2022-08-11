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