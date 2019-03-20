import React,{Component} from 'react';
class TrendingProducts extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
            
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img  src="https://cdn1.imggmi.com/uploads/2018/5/12/59f8648502aefd5c24a5ffa61ea9efb1-full.png" alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img  src="https://cdn1.imggmi.com/uploads/2018/5/12/f0478a4b5e4151001220db27f9b52516-full.png" alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img  src="https://cdn1.imggmi.com/uploads/2018/5/12/33c8c8a415cf7484ed5c6c4d545b3756-full.png" alt="Third slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        );
    }
    
}
export default TrendingProducts;