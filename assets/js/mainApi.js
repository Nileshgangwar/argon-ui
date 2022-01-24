// API = 'https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba'

fetch('https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba')
    .then((data)=>{
     return data.json();

}).then((completedata)=>{
    // console.log(completedata);
    for(var x in completedata){
        document.getElementById('root').
        innerHTML+=(`<tr>
        <th scope="row">
          <div class="media align-items-center">
            <div class="media-body">
              <span class="name mb-0 text-sm">${completedata[x][0].name} <br/>${completedata[x][1].name} 
              <br/>${completedata[x][2].name} </span>
              <div id="root"></div>
            </div>
          </div>
        </th>
        <td class="budget">
        ${completedata[x][0].company} <br/>  ${completedata[x][1].company} <br/> ${completedata[x][2].company} 
        </td>  
      </tr> - `);
        
    }

}).catch((err) =>{
    console.log(err);
})