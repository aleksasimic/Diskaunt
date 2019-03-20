export const fetchData= async () => {
    try{
        const response=await fetch("http://localhost:3001/proizvodi");
        const data=await response.json();
        console.log(" Usao u fetchData:")
        console.log(data);
        return data;
    
    }
    catch(e){
        console.log(e);
    
    }
    }
export const LikeProizvod=async(id)=>{
    try{
        
        const response=await fetch("http://localhost:3001/proizvodi"); 
        const data=await response.json();
         data.forEach(function(element) {
                if(element.id===id) 
                {
                 element.brojlajkova++;
                 update_database(element);
                }           
           });
        console.log(data);
        return data;
    
    }
    catch(e){
        console.log(e);
    
    }
}
export const DislajkProizvod= async(id) => {
    try{
        
        const response=await fetch("http://localhost:3001/proizvodi"); 
        const data=await response.json();
         data.forEach(function(element) {
                if(element.id===id) 
                {
                 element.brojdislajkova++;
                 update_database(element);
                }           
           });
        console.log(data);
        return data;
    
    }
    catch(e){
        console.log(e);
    
    }
}


export const AddProizvod= async (tmp) => {
    try{
        console.log("TMP U AddProizvod",tmp);
        console.log("U add proizvodu sam");
        const myresponse=await fetch("http://localhost:3001/proizvodi");
        const mydata=await myresponse.json();
        let obj={
            "id": mydata.length+1,
            "naziv": tmp.naziv,
            "cena": tmp.cena,
            "popust":tmp.popust,
            "market": tmp.market,
            "brojlajkova": 0,
            "brojdislajkova":0,
            "tip": tmp.tip,
            "slika": tmp.slika,
            "lajkallow": true,
            "dislajkallow": true
        }
        const response=await fetch("http://localhost:3001/proizvodi",{
            method: 'post',
          
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          
            body: JSON.stringify(obj)
          
          });
        const response2=await fetch("http://localhost:3001/proizvodi");
        const data=await response2.json();
        console.log(" Usao u fetchData:")
        console.log("PODACI POSLE ADD SU:",data);
        return data;
    }
    catch(e){
        console.log(e);
        
    }
}
export const DeleteProizvod= async (zabrisanje) => {
    console.log("Zabrisanje u DeleteProizvod",zabrisanje);
    let obj={
        "id": zabrisanje.id,
        "naziv": zabrisanje.naziv,
        "cena": zabrisanje.cena,
        "popust": zabrisanje.popust,
        "market": zabrisanje.market,
        "brojlajkova": zabrisanje.brojlajkova,
        "brojdislajkova": zabrisanje.brojdislajkova,
        "tip": zabrisanje.tip,
        "slika": zabrisanje.slika,
        "lajkallow": zabrisanje.lajkallow,
        "dislajkallow": zabrisanje.dislajkallow
    }
    console.log("obj u zabrisanje",obj);
    try{
    const response=await fetch("http://localhost:3001/proizvodi/"+obj.id,{
    
    method: 'delete',
          
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
          
    
          
    });
    const response2=await fetch("http://localhost:3001/proizvodi");
    const data=await response2.json();
    console.log(" Usao u DeleteData:")
    console.log("PODACI POSLE DELETE SU:",data);
        return data;
    }
    catch(e){
        console.log(e);
        
    }
}
export const UpdateProizvod= async (obj) => {
    try{
        update_database(obj);
        const response=await fetch("http://localhost:3001/proizvodi");
        const data=await response.json();
        console.log(" Usao u fetchData:")
        console.log(data);
        return data;
    }
    catch(e){
        console.log(e);
        
    }
}
export const searchProizvod=async(tmp)=>{
    try{
        
        const response=await fetch("http://localhost:3001/proizvodi");
        const data=await response.json();
        console.log(" Usao u searchProizvod:")
        console.log("Data u search proizvodu",data);
        return data.filter(product=>product.naziv.search(tmp.naziv)!=-1)
        .filter(product=>product.cena<tmp.cena) 
        .filter(product=>product.popust<tmp.popust) 
        .filter(product=>product.market===tmp.market) 
        .filter (product=>product.tip===tmp.tip);
    }
    catch(e){
        console.log(e);
        
    }
}



function update_database(obj){
    const urlObjekta = "http://localhost:3001/proizvodi" + "/" + obj.id;
    fetch(urlObjekta, {
        method: 'put',  
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
        })
        .then(response =>  response.json()) //returns jsons response
        .then(json => console.log('parsed json: ', json))
        .catch(ex => console.log('parsing failed: ', ex));
}
export const AuthUser= async (obj) => {
    try{
        const response=await fetch("http://localhost:3001/administratori");
        const data=await response.json();
        console.log(" Usao AuthUser:")
        console.log(data);
        let marketpom=null;
        data.forEach(function(user) {
            if(user.username===obj.username && user.password===obj.password ) 
            {  
             console.log("Ispunjen uslov");    
             marketpom=user.market;
             console.log(marketpom);
            }           
       });
       const myresponse=await fetch("http://localhost:3001/proizvodi");
        const mydata=await myresponse.json();

       return mydata.filter(product=>product.market===marketpom); 

    }
    catch(e){
        console.log(e);
        
    }
}

// export const UpdateProizvod= async () => {
//             try{
//                 const response=await fetch("http://localhost:3001/proizvodi");
//                 const data=await response.json();
//                 console.log(" Usao u fetchData:")
//                 console.log(data);
//                 return data;
            
//             }
//             catch(e){
//                 console.log(e);
            
//             }
//             }
//             export const DeleteProizvod= async () => {
//                 try{
//                     const response=await fetch("http://localhost:3001/proizvodi");
//                     const data=await response.json();
//                     console.log(" Usao u fetchData:")
//                     console.log(data);
//                     return data;
                
//                 }
//                 catch(e){
//                     console.log(e);
                
//                 }
//                 }
            
        
    