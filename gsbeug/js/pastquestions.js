function filter1(){
    var items=document.getElementById("section-2-subsection-level100-div");
    var l200=document.getElementById("section-2-subsection-level200-div");
    l200.style.display='none';
    var l300=document.getElementById("section-2-subsection-level300-div");
    l300.style.display='none';
    var l400=document.getElementById("section-2-subsection-level400-div");
    l400.style.display='none';
var col=document.getElementById('level100')
    col.style.backgroundColor='#ffd966';
    col.style.color='#0a164e'
    
var col2=document.getElementById('level200')
col2.style.backgroundColor='white';
col2.style.color='black'

var col3=document.getElementById('level300')
    col3.style.backgroundColor='white';
    col3.style.color='black'
    
var col4=document.getElementById('level400')
col4.style.backgroundColor='white';
col4.style.color='black'
     
    
if(items.style.display=='grid'){
    items.style.display='none';
} else{
    items.style.display='grid';
}
}

function filter2(){
    var items=document.getElementById("section-2-subsection-level200-div");
    var l100=document.getElementById("section-2-subsection-level100-div");
    l100.style.display='none';
    var l300=document.getElementById("section-2-subsection-level300-div");
    l300.style.display='none';
    var l400=document.getElementById("section-2-subsection-level400-div");
    l400.style.display='none';
    
var col=document.getElementById('level100')
col.style.backgroundColor='white';
col.style.color='black'

var col2=document.getElementById('level200')
col2.style.backgroundColor='#ffd966';
col2.style.color='#0a164e'

var col3=document.getElementById('level300')
col3.style.backgroundColor='white';
col3.style.color='black'

var col4=document.getElementById('level400')
col4.style.backgroundColor='white';
col4.style.color='black'
 
if(items.style.display=='grid'){
    items.style.display='none';
} else{
    items.style.display='grid';
}
}

function filter3(){
    var items=document.getElementById("section-2-subsection-level300-div");
    var l100=document.getElementById("section-2-subsection-level100-div");
    l100.style.display='none';
    var l200=document.getElementById("section-2-subsection-level200-div");
    l200.style.display='none';
    var l400=document.getElementById("section-2-subsection-level400-div");
    l400.style.display='none';

    
var col=document.getElementById('level100')
col.style.backgroundColor='white';
col.style.color='black'

var col2=document.getElementById('level200')
col2.style.backgroundColor='white';
col2.style.color='black'

var col3=document.getElementById('level300')
col3.style.backgroundColor='#ffd966';
col3.style.color='#0a164e'

var col4=document.getElementById('level400')
col4.style.backgroundColor='white';
col4.style.color='black'
 
    if(items.style.display=='grid'){
        items.style.display='none';
    } else{
        items.style.display='grid';
    }
}

function filter4(){
    var items=document.getElementById("section-2-subsection-level400-div");
    var l100=document.getElementById("section-2-subsection-level100-div");
    l100.style.display='none';
    var l200=document.getElementById("section-2-subsection-level400-div");
    l200.style.display='none';
    var l300=document.getElementById("section-2-subsection-level300-div");
    l300.style.display='none';

    
var col=document.getElementById('level100')
col.style.backgroundColor='white';
col.style.color='black'

var col2=document.getElementById('level200')
col2.style.backgroundColor='white';
col2.style.color='black'

var col3=document.getElementById('level300')
col3.style.backgroundColor='white';
col3.style.color='black'

var col4=document.getElementById('level400')
col4.style.backgroundColor='#ffd966';
col4.style.color='#0a164e'
 
    if(items.style.display=='grid'){
        items.style.display='none';
    } else{
        items.style.display='grid';
    }
}



function searchMaterials1() {
    const input = document.getElementById('searchBar').value.toUpperCase();
    const scholarshipList = document.getElementById('section-2-subsection-level100-div');
    const scholarships = scholarshipList.getElementsByTagName('div');

    for (let i = 0; i < scholarships.length; i++) {
        const scholarship = scholarships[i];
        const text = scholarship.textContent || scholarship.innerText;

        if (text.toUpperCase().indexOf(input) > -1) {
            scholarship.style.display = '';
        } else {
            scholarship.style.display = 'none';
        }
    }
}

function searchMaterials2() {
    const input = document.getElementById('searchBar').value.toUpperCase();
    const scholarshipList = document.getElementById('section-2-subsection-level200-div');
    const scholarships = scholarshipList.getElementsByTagName('div');

    for (let i = 0; i < scholarships.length; i++) {
        const scholarship = scholarships[i];
        const text = scholarship.textContent || scholarship.innerText;

        if (text.toUpperCase().indexOf(input) > -1) {
            scholarship.style.display = '';
        } else {
            scholarship.style.display = 'none';
        }
    }
}

function searchMaterials3() {
    const input = document.getElementById('searchBar').value.toUpperCase();
    const scholarshipList = document.getElementById('section-2-subsection-level300-div');
    const scholarships = scholarshipList.getElementsByTagName('div');

    for (let i = 0; i < scholarships.length; i++) {
        const scholarship = scholarships[i];
        const text = scholarship.textContent || scholarship.innerText;

        if (text.toUpperCase().indexOf(input) > -1) {
            scholarship.style.display = '';
        } else {
            scholarship.style.display = 'none';
        }
    }
}

function searchMaterials4() {
    const input = document.getElementById('searchBar').value.toUpperCase();
    const scholarshipList = document.getElementById('section-2-subsection-level400-div');
    const scholarships = scholarshipList.getElementsByTagName('div');

    for (let i = 0; i < scholarships.length; i++) {
        const scholarship = scholarships[i];
        const text = scholarship.textContent || scholarship.innerText;

        if (text.toUpperCase().indexOf(input) > -1) {
            scholarship.style.display = '';
        } else {
            scholarship.style.display = 'none';
        }
    }
}




function bar() {
    var s=document.getElementById("aside");
    var t= document.getElementById('asides');
      t.style.display='none';
    if (s.style.display === "block") {
        s.style.display = "none";
    } else {
        s.style.display= "block";
    }
  }
  
  function bars() {
    var s=document.getElementById("asides");
    var t= document.getElementById('aside');
      t.style.display='none';
    if (s.style.display === "block") {
        s.style.display = "none";
    } else {
        s.style.display= "block";
    }
  }