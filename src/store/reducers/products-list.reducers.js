import {PRODUCT_SEARCH, ADMIN_LOGIN} from "../actions";
import {PRODUCT_LIKE} from "../actions";
import {PRODUCT_DISLIKE} from "../actions";

const initialState={
    
    
    pocetni_product_list:[
    
        {id:1,naziv:"Lasko",cena:60,popust:20,market:"Roda",brojlajkova:50,brojdislajkova:25,tip:"Piće",slika:"https://cdn1.imggmi.com/uploads/2018/5/12/f0478a4b5e4151001220db27f9b52516-full.png",lajkallow:true,dislajkallow:true},
        {id:2,naziv:"Jelen",cena:250,popust:55,market:"Maxi",brojlajkova:25,brojdislajkova:15,tip:"Piće",slika:"https://cdn1.imggmi.com/uploads/2018/5/12/33c8c8a415cf7484ed5c6c4d545b3756-full.png",lajkallow:true,dislajkallow:true},
        {id:3,naziv:"Jelen",cena:2200,popust:5,market:"Maxi",brojlajkova:15,brojdislajkova:5,tip:"Piće",slika:"https://cdn1.imggmi.com/uploads/2018/5/14/fcfc54a91f98744ca89f139bcded6d8c-full.png",lajkallow:true,dislajkallow:true}  
    ]
    ,
    
    filtrirani_product_list:[
        {id:1,naziv:"Lasko",cena:60,popust:20,market:"Roda",brojlajkova:50,brojdislajkova:25,tip:"Piće",slika:"https://cdn1.imggmi.com/uploads/2018/5/12/f0478a4b5e4151001220db27f9b52516-full.png",lajkallow:true,dislajkallow:true},
        {id:2,naziv:"Jelen",cena:250,popust:55,market:"Maxi",brojlajkova:25,brojdislajkova:15,tip:"Piće",slika:"https://cdn1.imggmi.com/uploads/2018/5/12/33c8c8a415cf7484ed5c6c4d545b3756-full.png",lajkallow:true,dislajkallow:true},
        {id:3,naziv:"Jelen",cena:2200,popust:5,market:"Maxi",brojlajkova:15,brojdislajkova:5,tip:"Piće",slika:"https://cdn1.imggmi.com/uploads/2018/5/14/fcfc54a91f98744ca89f139bcded6d8c-full.png",lajkallow:true,dislajkallow:true}  
        ]
    ,
    najveca_snizenja_product_list:[
       {id:1,naziv:"Lasko",cena:60,popust:20,market:"Roda",brojlajkova:50,brojdislajkova:25,tip:"Piće",slika:"https://cdn1.imggmi.com/uploads/2018/5/12/f0478a4b5e4151001220db27f9b52516-full.png",lajkallow:true,dislajkallow:true},
        {id:2,naziv:"Jelen",cena:250,popust:55,market:"Maxi",brojlajkova:25,brojdislajkova:15,tip:"Piće",slika:"https://cdn1.imggmi.com/uploads/2018/5/12/33c8c8a415cf7484ed5c6c4d545b3756-full.png",lajkallow:true,dislajkallow:true},
        {id:3,naziv:"Jelen",cena:2200,popust:5,market:"Maxi",brojlajkova:15,brojdislajkova:5,tip:"Piće",slika:"https://cdn1.imggmi.com/uploads/2018/5/14/fcfc54a91f98744ca89f139bcded6d8c-full.png",lajkallow:true,dislajkallow:true}  
    ],
    najpopularniji_product_list:[
        {id:1,naziv:"Lasko",cena:60,popust:20,market:"Roda",brojlajkova:50,brojdislajkova:25,tip:"Piće",slika:"https://cdn1.imggmi.com/uploads/2018/5/12/f0478a4b5e4151001220db27f9b52516-full.png",lajkallow:true,dislajkallow:true},
        {id:2,naziv:"Jelen",cena:250,popust:55,market:"Maxi",brojlajkova:25,brojdislajkova:15,tip:"Piće",slika:"https://cdn1.imggmi.com/uploads/2018/5/12/33c8c8a415cf7484ed5c6c4d545b3756-full.png",lajkallow:true,dislajkallow:true},
        {id:3,naziv:"Jelen",cena:2200,popust:5,market:"Maxi",brojlajkova:15,brojdislajkova:5,tip:"Piće",slika:"https://cdn1.imggmi.com/uploads/2018/5/14/fcfc54a91f98744ca89f139bcded6d8c-full.png",lajkallow:true,dislajkallow:true}  
    ],
    adminmode:false
    
    
};
function getNewState(state){
    return {
        pocetni_product_list:state.pocetni_product_list.map(x=>x),
        filtrirani_product_list:state.filtrirani_product_list.map(x=>x),
        najveca_snizenja_product_list:state.pocetni_product_list.sort(function(a,b){return a.popust<b.popust}).slice(0,5),
        najpopularniji_product_list:state.pocetni_product_list.sort(function(a,b){return a.brojlajkova<b.brojlajkova}).slice(0,5),
        adminmode:state.adminmode
    }
}

export default function (state=initialState,action){
    switch(action.type){
        case PRODUCT_SEARCH:
            {
                
                const parametri=action.payload;
              
                state.filtrirani_product_list=state.pocetni_product_list.filter(product=>product.naziv.search(parametri.naziv)!=-1)
                .filter(product=>product.cena<parametri.cena) 
                .filter(product=>product.popust<parametri.popust) 
                .filter(product=>product.market===parametri.market) 
                .filter (product=>product.tip===parametri.tip);
                
                return getNewState(state);                
                 
            }
        case PRODUCT_LIKE:
        {
            console.log("Pre lajkovanja",state);
            let tmp=action.payload;
            state.pocetni_product_list[tmp-1].brojlajkova++;
            state.pocetni_product_list[tmp-1].lajkallow=false;
            state.pocetni_product_list[tmp-1].dislajkallow=false;
            console.log("Posle lajkovanja",state);
            state.filtrirani_product_list=state.pocetni_product_list.map(x=>x);
            console.log(state.filtrirani_product_list);
            return getNewState(state);
        }
        case PRODUCT_DISLIKE:
        {
            let tmp=action.payload;
            state.pocetni_product_list[tmp-1].brojdislajkova++;
            state.pocetni_product_list[tmp-1].dislajkallow=false;
            state.pocetni_product_list[tmp-1].lajkallow=false;
            state.filtrirani_product_list=state.pocetni_product_list.map(x=>x);
            return getNewState(state);
        }
        case ADMIN_LOGIN:
        {
            let tmp=action.payload;
            let username=tmp.username;
            let password=tmp.password;
            console.log("U adminloginu sam");

                
                state.adminmode=true;
                state.filtrirani_product_list=state.pocetni_product_list.map(x=>x);
                return getNewState(state);
            

        }
    }
    return state;
}