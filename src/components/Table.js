import React, { Component } from 'react';
import Tabledata from './TableData';

class Table extends Component {
  usermapping =()=>
    this.props.Data2.map((value,key) =>(
      <Tabledata
      changeEdit={()=>this.props.changeEdit()}
      editFunclick={(user)=>this.props.editFun(value)}
       key={key}
        name={value.Name}
        stt={key+1}
        id={value.id}
        phone={value.phone}
        permission={value.permission}
        checkIdUser2={(idUser)=>this.checkIdUser1(idUser)}
        
      />
    )
    );
  //this.props.checkIdUser
// this.props.editFun()
checkIdUser1=(idUser)=>{
  this.props.checkIdUser(idUser)
}
    render() {
      localStorage.setItem('key1','haha');
      console.log(localStorage.getItem('key1'));
      localStorage.removeItem('key1');
      // console.log(this.props.Data)
        return (
            <div>
                <table className="table table-striped table-hover">
  <tbody><tr>
      <th>STT</th>
      <th>Tên</th>
      <th>SĐT</th>
      <th>Quyền</th>
      <th>Hành Động</th>
    </tr>

           {this.usermapping()}
            

    
  </tbody></table>

            </div>
        );
    }
}

export default Table;