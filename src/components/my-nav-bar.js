import React,{Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logIn } from "../store/actions/index";
import { authUser} from "../store/actions/index";

class MyNavBar extends Component{
    constructor(){
        super();
    }
    render(){
        return (
          <div>
            <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
            <a href="https://imggmi.com" target="_blank"><img src="https://cdn1.imggmi.com/uploads/2018/5/12/214d5eb963b66468b536fcffa63f1361-full.jpg" border="0"/></a>        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                  <button type="button" className="btn mojedugme" data-toggle="modal" data-target="#myModal">Sign in</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title">Unesite vaše podatke</h4>
          <button type="button" class="close"  data-dismiss="modal">&times;</button>
        </div>

        
        <div class="modal-body">
        <form>
        <div class="form-group">
        <div className="formdivs">Korisničko ime</div>
            <input type="email"  ref={ref => this.username = ref} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Unesite vaše korisničko ime"/>
            <small id="emailHelp" class="form-text text-muted">Korisničko ime mora biti u bazi podataka administratora.</small>
            </div>
        <div class="form-group">
        <div className="formdivs">Šifra</div>
        <input type="password"  ref={ref => this.sifra = ref} class="form-control" id="exampleInputPassword1" placeholder="Unesite šifru"/>
        </div>
      </form>
        </div>

        
        <div class="modal-footer">
          <button type="submit" onClick={this.signup} class="btn btn-danger" data-dismiss="modal"> Prijavi se</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Zatvori</button>
        </div>

    </div>
  </div>
</div>
          </div>
          
        );
    }
  signup=(event)=>{
    let tmp={
      "username":this.username.value,
      "password":this.sifra.value
    }
    this.props.prijaviSe(this.username.value,this.sifra.value);
    this.props.authUser(tmp);
  }

}
function mapStateToProps(state){
  return{
      products: state.products,
      data:state.data
  }
}

function MapDispatcherToProps(dispatch){
  return bindActionCreators({
      prijaviSe : logIn,
      authUser
  }, dispatch);
}

export default connect(mapStateToProps, MapDispatcherToProps )(MyNavBar);