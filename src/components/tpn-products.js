import React,{Component} from 'react';
import SearchProducts from "./search-products";
import TrendingProducts from "./trending-products";
import NewestProducts from "./newest-products";
import PopularProducts from "./popular-products";
class TpnProducts extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div class="container">
            <SearchProducts></SearchProducts>
            <div class="row">
            <div class="col-lg-3">
            </div>
            <div class="col-lg-9">
            <div class="tekstovidva">Trenutno aktuelni proizvodi</div>
            <TrendingProducts></TrendingProducts>
            <div class="kontejnerzaliste">
                <div>
                    <div class="tekstovi">Najveći popusti</div>
                    <div class="tekstovi">Najpopularniji proizvodi</div>
                </div>
                <NewestProducts></NewestProducts>
                <PopularProducts></PopularProducts>
            </div>
            </div>
            </div>
            
            </div>
        );
    }
}
export default TpnProducts;