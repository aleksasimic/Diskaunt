import React,{Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchProduct } from "../store/actions/index";
import ProductList from "../components/product-list";
import ProductAdd from "../components/product-add";
import {addData} from "../store/actions/index";
import {deleteData} from "../store/actions/index";
import {searchData} from "../store/actions/index";
class SearchProducts extends Component{
    constructor(){
        super();
    }
    render(){
        if(!this.props.admin){
        return (
            <div class ="levi">
    
            <input id="naziv" ref={ref => this.naziv = ref} onChange={this.traziProizvodonChange_selekt} type="text" class="form-control" placeholder="Pretraži proizvode.." aria-label="" aria-describedby="basic-addon1"></input>
            <div className="form-group">
            <div class="tekstovitri">Popust u procentima</div>
            <select onChange={this.traziProizvodonChange_selekt} ref={ref => this.popust = ref} class="form-control" id="sel1">
        
                <option>20</option>
                <option>40</option>
                <option>60</option>
                <option>80</option>
            </select>
            <div class="tekstovitri">Najveća cena u dinarima</div>
            <select onChange={this.traziProizvodonChange_selekt} ref={ref => this.cena = ref} id="cena" class="form-control" id="sel1">
        
                <option>200</option>
                <option>400</option>
                <option>600</option>
                <option>800</option>
            </select>
            <div class="tekstovitri">Prodavnica</div>
            <select onChange={this.traziProizvodonChange_selekt} ref={ref => this.market = ref} class="form-control" id="sel1">
        
                <option>Roda</option>
                <option>Tempo</option>
                <option>Metro</option>
                <option>Maxi</option>
                <option>Idea</option>

            </select>
            <div class="tekstovitri">Tip namirnice</div>
            <select onChange={this.traziProizvodonChange_selekt} ref={ref => this.tip = ref} class="form-control" id="sel1">
            
                <option>Hrana</option>
                <option>Piće</option>
                <option>Higijena</option>
                <option>Ostalo</option>

            </select>
            </div>
            <ProductList></ProductList>
            </div>
        );}
        else {
            return (
            
            <div>
            <div className="Dodatni">
            <div className="Dodatnidva"  data-toggle="modal" data-target="#myModaltri">Dodaj novi proizvod <img className="slike" src="https://cdn1.imggmi.com/uploads/2018/5/26/5b595e18f75f4313c0843471663f1738-full.png" alt=""/></div>
            

             <div class="modal" id="myModaltri">
            <div class="modal-dialog">
            <div class="modal-content">

            <div class="modal-header">
            <h4 class="modal-title">Unesite podatke o proizvodu koji želite da dodate</h4>
            <button type="button" class="close"  data-dismiss="modal">&times;</button>
            </div>

        
            <div class="modal-body">
            <form>
            
            {/* <div class="form-group">
            <div className="formdivs">ID</div>
            <input type="text"  ref={ref => this.id = ref} class="form-control"  />
            </div> */}
            
            <div class="form-group">
            <div className="formdivs">Naziv</div>
            <input type="text"  ref={ref => this.nazivadd = ref} class="form-control"  />
            </div>
            
            <div class="form-group">
            <div className="formdivs">Cena</div>
            <input type="text"  ref={ref => this.cenaadd = ref} class="form-control"  />
            </div>
            
            <div class="form-group">
            <div className="formdivs">Popust</div>
            <input type="text"  ref={ref => this.popustadd = ref} class="form-control"  />
            </div>

            <div class="form-group">
            <div className="formdivs">Tip</div>
            <input type="text"  ref={ref => this.tipadd = ref} class="form-control" />
            </div>

            <div class="form-group">
            <div className="formdivs">Market</div>
            <input type="text"  ref={ref => this.marketadd = ref} class="form-control" />
            </div>
            
            <div class="form-group">
            <div className="formdivs">URL slike</div>
            <input type="text"  ref={ref => this.slikaadd = ref} class="form-control" />
            </div>
            
            
            
            
            </form>
            </div>

        
            <div class="modal-footer">
            <button type="submit"  onClick={this.dodaj} class="btn btn-danger" data-dismiss="modal"> Sačuvaj izmene</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Zatvori</button>
            </div>

        </div>
     </div>
    </div>
            
            </div>
            <ProductList></ProductList>
            </div>    
            )           
        }
    }
    traziProizvodonChange = (event) => {
        
        let naziv = event.target.value;
         let popust=this.popust.value;
         let cena=this.cena.value; 
         let market=this.market.value;;
         let tip=this.tip.value;
        console.log(naziv,popust,cena,market,tip);
        this.props.traziProizvod(naziv,popust,cena,market,tip);
    }
    traziProizvodonChange_selekt = (event) => {
        console.log("U on change sam");   
         let naziv = this.naziv.value;
         let popust=this.popust.value;
         let cena=this.cena.value; 
         let market=this.market.value;;
         let tip=this.tip.value;

         let tmp={
             "naziv":naziv,
             "popust":popust,
             "cena":cena,
             "market":market,
             "tip":tip
         }
         this.props.searchData(tmp);

        // console.log(naziv,popust,cena,market,tip);
        // this.props.traziProizvod(naziv,popust,cena,market,tip);
    }
    dodaj=(event)=>{
        let tmp={
            "naziv":this.nazivadd.value,
            "cena":this.cenaadd.value,
            "popust":this.popustadd.value,
            "tip":this.tipadd.value,
            "market":this.marketadd.value,
            "slika":this.slikaadd.value,

        }
        console.log("Za dodavanje",tmp);
        this.props.addData(tmp);
    }
    
}
function mapStateToProps(state){
    return{
        data:state.data,
        products: state.products,
        admin:state.products.adminmode
    }
}

function MapDispatcherToProps(dispatch){
    return bindActionCreators({
        traziProizvod : searchProduct,
        addData,
        searchData 
    }, dispatch);
}

export default connect(mapStateToProps, MapDispatcherToProps )(SearchProducts);
