// import React,{Component} from 'react';
// import {connect} from 'react-redux';
// import{bindActionCreators} from 'redux';
// import {dodajBook} from '../store/actions';

// class AddBook extends Component{
//     constructor(){
//         super();
//     }
//     render(){
//         return (
//         <div>
//             <label>Naziv</label>
//             <input name="naziv" onChange={this.postaviNaziv}></input>
//             <label>Broj stranica</label>
//             <input name="strane" onChange={this.postaviStrane}></input>
//             <button onClick={()=>{this.props.dodaj(this.state);console.log(this.state)}}>Dodaj knjigu</button>
//         </div>
//         );
//     }
//     postaviNaziv=(event)=>{
        
//         this.setState({
//             title:event.target.value
//         });
//         console.log("Ovde sam",this.state);
//     }
//     postaviStrane=(event)=>{
//         this.setState({
//             pages:event.target.value
//         });
//     }
// }
//     function mapStateToProps(state){
//         return{
//             bilosta:state.bilosta
//         }
//     }
//     function MapDispatchToProps(dispatch){
//         return bindActionCreators({
//             dodaj:dodajBook
//         },dispatch)
//     }
//     export default connect(mapStateToProps,MapDispatchToProps)(AddBook);