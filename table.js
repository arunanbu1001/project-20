var table = document.createElement('table');
var tr = document.createElement('tr');
var img = '<img src="/images/ACE.jpg" />';
var arrheader = ['Photo', 'Name', 'Mobile', 'Batch','Git', 'Refby', 'Location', 'Placement_status'];
var array = [{
  Photo: 'ad',
  Name: 'Mehvish',
  mobile: 'Ashiq',
  Batch: 'Female',
  Git: 'link',
  Refby: 'name',
  Location:'loc',
  placment_status:'proces'
},
  {
    Photo: 'afr',
    Name: 'Arun',
    mobile: 'Ashiq',
    Batch: 'Male',
    Git: 'link',
    Refby: 'name',
    Location:'loc',
    placment_status:'proces'
  },
  {
    Photo: 1,
    Name: 'Mehvish',
    mobile: 'Ashiq',
    Batch: 'Female',
    Git: 'link',
    Refby: 'name',
    Location:'loc',
    placment_status:'proces'
  },
  {
    Photo: 1,
    Name: 'Mehvish',
    mobile: 'Ashiq',
    Batch: 'Female',
    Git: 'link',
    Refby: 'name',
    Location:'loc',
    placment_status:'proces'
  },
  {
    Photo: 1,
    Name: 'Mehvish',
    mobile: 'Ashiq',
    Batch: 'Female',
    Git: 'link',
    Refby: 'name',
    Location:'loc',
    placment_status:'proces'
  }
];

for (var j = 0; j < arrheader.length; j++) {
  var th = document.createElement('th');  
  var text = document.createTextNode(arrheader[j]);  
  th.appendChild(text);
  tr.appendChild(th);
}
table.appendChild(tr);

for (var i = 0; i < array.length; i++) {
  var tr = document.createElement('tr');

  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');
  var td8 = document.createElement('td');

  var text1 = document.createTextNode(array[i].Photo);
  var text2 = document.createTextNode(array[i].Name);
  var text3 = document.createTextNode(array[i].mobile);
  var text4 = document.createTextNode(array[i].Batch);
  var text5 = document.createTextNode(array[i].Git);
  var text6 = document.createTextNode(array[i].Refby);
  var text7 = document.createTextNode(array[i].Location);
  var text8 = document.createTextNode(array[i].placment_status);

  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  td4.appendChild(text4);
  td5.appendChild(text5);
  td6.appendChild(text6);
  td7.appendChild(text7);
  td8.appendChild(text8);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  tr.appendChild(td8);


  table.setAttribute("border", "solid 1px");
  table.setAttribute('style', 'width: 100%');
  tr.setAttribute('text_align', 'center');
  td1.setAttribute('text-align', 'center');
  td2.setAttribute('text-align', 'center');
  td3.setAttribute('text-align', 'center');
  td4.setAttribute('text-align', 'center');
  td5.setAttribute('text-align', 'center');
  td6.setAttribute('text-align', 'center');
  td7.setAttribute('text-align', 'center');
  td8.setAttribute('text-align', 'center');
   
  table.appendChild(tr);
}
document.body.appendChild(table);











































