import React , { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchProduct } from "../store/actions/index";
import Product from '../components/product.js';
import {requestApiData} from "../store/actions/index";

class ProductList extends Component{
    componentDidMount(){
        this.props.requestApiData();

    }
    render(){
        return (
            <ul>
                {this.renderSagaList()}
            </ul>
        )
    }
    renderFilterList(){
        console.log("Ovo je props",this.props);
        if(!this.props.products.length === 0){
            return <li> Loading... </li>;
        }
        else{
            
            return (
                <div className="zaproizvode">
                {console.log("Ovde sam!!!!!!")}
                {console.log("Filter lista u product list",this.props.products.length)}
                {this.props.products.map(product=><li key={product.id}><Product proizvod={product}></Product></li>)}
                {console.log("gorov render")}
                </div>
            );
        }
    }
    renderSagaList(){
    let results=[];
    results=this.props.data;
    console.log("Rezultati",results);
    console.log("DATA",this.props.data);
    if(typeof results !== 'undefined' && results.length > 0){
        return (
            <div className="zaproizvode">
            
            
            {results.map(product=><li key={product.id}><Product proizvod={product}></Product></li>)}
           
            </div> 
        );
    }
    }

}

function mapStateToProps(state){
 
    console.log(state.products.filtrirani_product_list);
    return{
        data:state.data,
        products: state.products.filtrirani_product_list       
    }
}

function MapDispatcherToProps(dispatch){
    return bindActionCreators({ 
        requestApiData
    }, dispatch);
}
export default connect(mapStateToProps , MapDispatcherToProps )(ProductList);