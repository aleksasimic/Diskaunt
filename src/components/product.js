import React,{Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { likeProduct } from "../store/actions/index";
import { dislikeProduct } from "../store/actions/index";
import ProductUpdate from "../components/product-update";
import ProductAdd from "../components/product-add";
import ProductRemove from "../components/product-remove";
import {likeApiData} from "../store/actions/index";
import { dislikeApiData} from "../store/actions/index";

class Product extends Component{
    constructor(){
        super();
    }
    render(){
        if (!this.props.admin)
        {
            return (
            
            <div className="divzaelement">
              <div className="card">
                <a href="#"><img class="card-img-top" src={this.props.proizvod.slika}alt=""/></a>
               {console.log("Renderujem product",this.props)} 
               <div>
                  <h4>
                    <a >{this.props.proizvod.naziv}</a>
                  </h4>
                  <h5>{this.props.cena}</h5>
                  <div>Ovaj proizvod je na popustu od : <span className="myspan">{this.props.proizvod.popust}%</span> .Market:<span className="myspan">{this.props.proizvod.market}</span></div>
                  <div>Cena sa popustom: <span className="myspan">{this.props.proizvod.cena} RSD</span></div>
                  <div  onClick={this.lajk} className="zaslike_levo">
                      <img className="slike" src="https://cdn1.imggmi.com/uploads/2018/5/17/df89f29e297d4532266f5362848dfd1f-full.png" alt=""/>
                      <label className="labele">{this.props.proizvod.brojlajkova}</label>
                 </div>
                <div ref={ref => this.mydiv = ref} onClick={this.dislajk} className="zaslike_desno">
                    <img className="slike" src="https://cdn1.imggmi.com/uploads/2018/5/17/10f959baf5c28aabb713850856472b2d-full.png" alt=""/>
                    <label className="labele">{this.props.proizvod.brojdislajkova}</label>
                </div>
                </div>
              </div>
            </div>
        );
        }
        else
        {
            return (
            
                <div className="divzaelement">
                  <div className="card">
                    <a href="#"><img class="card-img-top" src={this.props.proizvod.slika}alt=""/></a>
                   {console.log("Renderujem product")} 
                   <div>
                      <h4>
                        <a >{this.props.proizvod.naziv}</a>
                      </h4>
                      <h5>{this.props.cena}</h5>
                      <div>Ovaj proizvod je na popustu od : <span className="myspan">{this.props.proizvod.popust}%</span> .Market:<span className="myspan">{this.props.proizvod.market}</span></div>
                      <div>Cena sa popustom: <span className="myspan">{this.props.proizvod.cena} RSD</span></div>
                      <div  onClick={this.lajk} className="zaslike_levo">
                          <img className="slike" src="https://cdn1.imggmi.com/uploads/2018/5/17/df89f29e297d4532266f5362848dfd1f-full.png" alt=""/>
                          <label className="labele">{this.props.proizvod.brojlajkova}</label>
                     </div>
                    <div ref={ref => this.mydiv = ref} onClick={this.dislajk} className="zaslike_desno">
                        <img className="slike" src="https://cdn1.imggmi.com/uploads/2018/5/17/10f959baf5c28aabb713850856472b2d-full.png" alt=""/>
                        <label className="labele">{this.props.proizvod.brojdislajkova}</label>
                    </div>
                   
                    <ProductRemove zabrisanje={this.props.proizvod}></ProductRemove>
                    <ProductUpdate zaupdate={this.props.proizvod}></ProductUpdate>
                    </div>
                    
                  </div>
                </div>
            );  
        }
    }
    
    lajk=(event)=>{
    
        this.props.likeApiData(this.props.proizvod.id);
    }
    dislajk=(event)=>{
        // if(this.props.proizvod.dislajkallow)
        //     this.props.dislajkuj(this.props.proizvod.id);
        console.log("Dislajkovano");
        console.log("ID",this.props.proizvod.id);
        this.props.dislikeApiData(this.props.proizvod.id);
    }
}
function mapStateToProps(state){
    return{
            data:state.data,
          products:state.products,
          admin:state.products.adminmode
    }
  }
  
  function MapDispatcherToProps(dispatch){
    return bindActionCreators({ 
        lajkuj:likeProduct,
        dislajkuj:dislikeProduct,
        likeApiData,
        dislikeApiData
    }, dispatch);
  }
  export default connect(mapStateToProps , MapDispatcherToProps )(Product);