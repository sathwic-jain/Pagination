
var  request= new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);

request.send();

request.onload=function(){
var data=JSON.parse(request.response);
console.log(data);

var table=document.createElement('table');
table.setAttribute('class','table');

var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark')
var tr=document.createElement('tr');
var tbody=document.createElement('tbody');


var th1=document.createElement('th')
th1.innerHTML='id'
var th2=document.createElement('th');
th2.innerHTML='Name'
var th3=document.createElement('th');
th3.innerHTML='Email';

tr.append(th1,th2,th3);
thead.append(tr);
table.append(thead);


document.body.append(table);
for(let x=1*5;x<((1+1)*5);x++){
    let k=data[x];
    var tr=document.createElement('tr');
        var td1=document.createElement('td');
        var td2=document.createElement('td');
        var td3=document.createElement('td');
        td1.innerHTML=k.id
        td2.innerHTML=k.name;
        td3.innerHTML=k.email;
        if(x%2===0) tr.setAttribute('style','background-color:#d3d3d3');
        tr.append(td1,td2,td3);
        tbody.append(tr);
        
        table.append(tbody);
        document.body.append(table);
        
    
}

var outside1=document.createElement('div');
outside1.setAttribute('class','buttons'); 
function page(p)
{   
    outside1.innerHTML=" ";
    document.body.append(outside1);
    var outside=document.querySelector('.buttons');
    var prev=document.createElement('button');
    prev.innerHTML="prev";
    prev.addEventListener('click',()=>{
        if(p>2){
            page(p-1);
            
        }
    });
    var divis=document.createElement('div');
        divis.setAttribute('style','padding:5px');
    divis.append(prev);
    outside.append(divis);
    page_again(p);

    function page_again(p){
    let currentpage=p;
    for(let q=p-1;q<p+2;q++)
    {   
        if(q===0)continue;
        var divis=document.createElement('div');
        divis.setAttribute('style','padding:5px');
        var button=document.createElement('button');
        button.innerHTML=q;
        button.addEventListener('click',()=>{
            
            i=q-1;
            var tbod=document.querySelector('tbody');
            tbod.innerHTML=" ";
        
            for(let x=i*5;x<((i+1)*5);x++){
                let k=data[x];
                var tr1=document.createElement('tr');
                    var td4=document.createElement('td');
                    var td5=document.createElement('td');
                    var td6=document.createElement('td');
                    td4.innerHTML=k.id
                    td5.innerHTML=k.name;
                    td6.innerHTML=k.email;
                    if(x%2===0) tr1.setAttribute('style','background-color:#d3d3d3');
                    tr1.append(td4,td5,td6);
                    tbod.append(tr1);
                    table.append(tbod);
                    document.body.append(table);
                    
                
            }
        });
        divis.append(button);
    outside.append(divis)
    }
}

    var next=document.createElement('button');
    next.innerHTML="next";
    next.addEventListener('click',()=>{
        if(p<19)page(p+1);
    });
    var divis=document.createElement('div');
        divis.setAttribute('style','padding:5px');
    divis.append(next);
    outside.append(divis)
    document.body.append(outside);
}
page(1);
}