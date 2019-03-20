import React,{Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { likeProduct } from "../store/actions/index";
import { dislikeProduct } from "../store/actions/index";
import ProductUpdate from "../components/product-update";
import ProductAdd from "../components/product-add";
import {likeApiData} from "../store/actions/index";
import { dislikeApiData} from "../store/actions/index";
import { deleteData} from "../store/actions/index";

class ProductRemove extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            
            <div className="arm">
            <div >Obriši proizvod</div>
             <div onClick={this.remove} ><img className="slike" src="https://cdn1.imggmi.com/uploads/2018/5/26/39e6343604b7298a21618b0b43fec852-full.png" alt=""/></div>
         </div>
        
        );
    }
    remove=(event)=>{
        console.log("Okinuo sam event brisanja",this.props.zabrisanje);
        this.props.deleteData(this.props.zabrisanje);
    }
}
function mapStateToProps(state){
    return{
            data:state.data,
         
    }
  }
  
  function MapDispatcherToProps(dispatch){
    return bindActionCreators({ 
        deleteData
    }, dispatch);
  }
export default connect(mapStateToProps , MapDispatcherToProps )(ProductRemove);
