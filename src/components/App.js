import "../App.css";
import Adduser from "./Adduser";
import Header from "./header";
import Table from "./Table";
import React, { Component } from 'react';
import DataUser from "./data.json"


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      trangThai1 : true , 
      data: DataUser,
      searchText:"",
      Edit : false,
      editUserObject:{},
    }
  }
  checkIdUser=(idUser)=>{
    var tempData = this.state.data.filter(item => item.id !== idUser)
    this.setState({
      data:tempData
    })

   
    }
  getEditUser =(info)=>{
    this.state.data.forEach((value,key)=>{
      if(value.id===info.id){
        value.Name=info.Name
        value.phone=info.phone
        value.permission=info.permission
      }
    })
    // console.log(info.Name);
  }

 
  changeEdit = ()=>{
    this.setState({
      Edit : !this.state.Edit,
    })
  }
  editUser =(user)=>{
    // console.log('ket noi thanh cong');
    this.setState({
      editUserObject:user
    })
    // console.log(user);
  }
  NewuserData=(name,tel,permission)=>{
    var item={};
    item.id="";
    item.Name=name;
    item.phone=tel;
    item.permission=permission;
    var item2 = this.state.data;
    item2.push(item);
    
    this.setState({
      data : item2
    })
    console.log(this.state.data);
  }
  
  checkconnect=(dl)=>{
    this.setState({
      searchText : dl
    })
    console.log('nhan duoc du lieu roi nhe ' + dl );
  }
  thayDoiTrangThai1 =()=>{
    this.setState({
      trangThai1:!this.state.trangThai1
    })
  }
 
 
  thayDoi= () =>{
    console.log("123")
    alert('ket noi thanh cong');
  }
  thayDoi2 =()=>{
    alert('ban da ket noi');
  }
 
  render() {
    //  console.log(this.state);
    var ketqua = [];
    this.state.data.forEach((item)=>{
      // console.log(item);
      if(item.Name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    // console.log(ketqua);
    return (
      <div>
            <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <Header thayDoi1={this.thayDoi}
        thayDoi3={this.thayDoi2}
        thayDoiTrangThai1={this.thayDoiTrangThai1}
        hienThiNut1={this.state.trangThai1}
        checkconnectprops={(dl)=>this.checkconnect(dl)}
        changeEdit={()=>this.changeEdit()}
        Edit1={this.state.Edit}
        editUserObject={this.state.editUserObject}
        getEditUser={(info)=>this.getEditUser(info)}
        />
      <hr/>
      <div className="row">
        <div className="col-9">
          <Table editFun={(user)=>this.editUser(user)} Data2 = {ketqua}
           changeEdit={()=>this.changeEdit()}
           checkIdUser={(idUser)=>this.checkIdUser(idUser)}
           />
        </div>
        <div className="col-3">
        <Adduser Data1={(name,tel,permission)=>this.NewuserData(name,tel,permission)}/>  
        </div>
         
        
      </div>
    </div>
    </div>
      </div>
    );
  }
}

export default App;