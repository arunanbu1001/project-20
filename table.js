var tablearea = document.getElementById('tablearea');

var table = document.createElement('table');
table.setAttribute("class", "bor")
var tr = [];
var td =[] 
for (i = 0; i < 5; i++) {
    tr[i] = document.createElement("tr")
    for (j = 0; j < 8; j++) {
        td= document.createElement("td")
               
                function box(photo, name, mobile, batch, git, referby,referby1) {
                    able( photo)
                    able( name)
                    able( mobile)
                    able( batch)
                    able( git)
                    able( referby)
                    able( referby1)
                    // tr.forEach()
                   
                }
                  box("photo", "name", "mobile", "batch", "git", "referby","location")
box("photo", "EDWINRAJ", "9361046327", "FSD-9", "zeddyy", "velmrgan-fsd8","chennai")  
console.log(tr[i])
console.log(i)
box("photo", "francis", "9500252669", "FSD-09", "FRANCISANIMH", "G.srya fsd 04","pavoorchathram")

                function able(n) {
                    td.append(n)
                        console.log(td)
                }
                tr[i].append(td)
                
                td.setAttribute("class","bor")
    }
    tr[i].append(td)
    table.append(tr[i])
//td.setAttribute("class","bor")

}

//console.log(k)

tablearea.appendChild(table);