import React,{Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateData} from "../store/actions/index";

class ProductUpdate extends Component{
    constructor(){
        super();
    }
    render(){
        console.log("RENDERUJEM ZA UPDATE",this.props.zaupdate);
        console.log("PROPS ZA UPDATE",this.props);
        let mystr="myModal"+this.props.zaupdate.id;
        return (
            
            <div>
            
            <div className="arm">
            <div>Izmeni proizvod</div>
             <div  data-toggle="modal" data-target={"#"+mystr}><img className="slike" src="https://cdn1.imggmi.com/uploads/2018/5/26/e81ed56c27eb34fc61145fd7231159f5-full.png" alt=""/></div>
            </div>
            
            <div class="modal" id={mystr}>
            <div class="modal-dialog">
            <div class="modal-content">

            <div class="modal-header">
            <h4 class="modal-title">Unesite izmenjene podatke</h4>
            <button type="button" class="close"  data-dismiss="modal">&times;</button>
            </div>

        
            <div class="modal-body">
            <form>
            
            <div class="form-group">
            <div className="formdivs">ID</div>
            <input type="text"  ref={ref => this.id = ref} class="form-control"  defaultValue={this.props.zaupdate.id}/>
            </div>
            {console.log("U RETURNU id",this.props.zaupdate.id)}
            <div class="form-group">
            <div className="formdivs">Naziv</div>
            <input type="text"  ref={ref => this.naziv = ref} class="form-control"  defaultValue={this.props.zaupdate.naziv}/>
            </div>
            
            <div class="form-group">
            <div className="formdivs">Cena</div>
            <input type="text"  ref={ref => this.cena = ref} class="form-control"  defaultValue={this.props.zaupdate.cena}/>
            </div>
            
            <div class="form-group">
            <div className="formdivs">Popust</div>
            <input type="text"  ref={ref => this.popust = ref} class="form-control"  defaultValue={this.props.zaupdate.popust}/>
            </div>

            <div class="form-group">
            <div className="formdivs">Tip</div>
            <input type="text"  ref={ref => this.tip = ref} class="form-control"  defaultValue={this.props.zaupdate.tip}/>
            </div>
            
            <div class="form-group">
            <div className="formdivs">URL slike</div>
            <input type="text"  ref={ref => this.slika = ref} class="form-control"  defaultValue={this.props.zaupdate.slika}/>
            </div>
            
            
            
            
            </form>
            </div>

        
            <div class="modal-footer">
            <button type="submit" onClick={this.update} class="btn btn-danger" data-dismiss="modal"> Sačuvaj izmene</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Zatvori</button>
            </div>

        </div>
     </div>
    </div>

            </div>
        
        );
    }
    update=(event)=>{
       
        let obj={
            "naziv":this.naziv.value,
            "cena":this.cena.value,
            "popust":this.popust.value,
            "tip":this.tip.value,
            "slika":this.slika.value
        }
        console.log("Okinuo sam event updateovanja",obj);
        this.props.updateData(obj);
    }
}
function mapStateToProps(state){
    return{
            data:state.data,
         
    }
  }
  
  function MapDispatcherToProps(dispatch){
    return bindActionCreators({ 
        updateData
    }, dispatch);
  }
export default connect(mapStateToProps , MapDispatcherToProps )(ProductUpdate);
