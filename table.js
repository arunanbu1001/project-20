var tablearea = document.getElementById('tablearea');

var table = document.createElement('table');
table.setAttribute("class", "bor")
var tr = [];

for (i = 0; i < 5; i++) {
    tr[i] = document.createElement("tr")
    for (j = 0; j < 8; j++) {
        td = document.createElement("td")
               
                function box(photo, name, mobile, batch, git, referby,referby1) {
                    able( photo)
                    able( name)
                    able( mobile)
                    able( batch)
                    able( git)
                    able( referby)
                    able( referby1)
                    
                    
                    function able(n) {
                        td.append(n)
                            console.log(td)
                    }
                }
               
                tr[i].append(td)
    }
    table.append(tr[i])
    
   

}
box("photo", "name", "mobile", "batch", "git", "referby","location")
box("photo", "EDWINRAJ", "9361046327", "FSD-9", "zeddyy", "velmrgan-fsd8","chennai")  
box("photo", "francis", "9500252669", "FSD-09", "FRANCISANIMH", "G.srya fsd 04","pavoorchathram")
console.log(tr[i])


//tr.forEach(able)




//console.log(k)

tablearea.appendChild(table);