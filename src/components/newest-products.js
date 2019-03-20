import React,{Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchProduct } from "../store/actions/index";
import Product from '../components/product.js';
import {requestApiData} from "../store/actions/index";

class NewestProducts extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.requestApiData();

    }
    render(){
        return (
            
            <div>
            {this.renderSaga()}
            </div>
            
        );
    }
    renderSaga(){
    let results=[];
    results=this.props.data;
    console.log("Rezultati",results);
    console.log("DATA",this.props.data);
    if(typeof results !== 'undefined' && results.length > 0){
        return (
            <div className="zaproizvode">
            
            
            {results.sort(function(a,b){return a.popust>b.popust}).slice(0,5).map(product=><li key={product.id}><Product proizvod={product}></Product></li>)}
           
            </div> 
        );
    }
    }   
}
function mapStateToProps(state){
  return{
      data:state.data,
      products: state.products.najveca_snizenja_product_list,       
  }
}

function MapDispatcherToProps(dispatch){
  return bindActionCreators({ 
    requestApiData      
  }, dispatch);
}
export default connect(mapStateToProps , MapDispatcherToProps )(NewestProducts);