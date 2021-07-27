import React, { Component } from "react";

class tabledata extends Component {
    permission =()=>{
        if(this.props.permission==="1"){
            return ('admin')
        }
        if(this.props.permission==="2"){
            return('moderator')
        }else{
            return('normal')
        }
    }
    editClick=()=>{
      this.props.editFunclick()
      this.props.changeEdit()
    }
    checkIdUser3=(idUser)=>{
        this.props.checkIdUser2(idUser)
    }
  render() {
    return (
      
        <tr>
          <td>{this.props.stt}</td>
          <td>{this.props.name}</td>
          <td>{this.props.phone}</td>
          <td>{this.permission()}</td>
          <td>
            <div className="btn btn-warning sua" onClick={()=>this.editClick()}>
              <i className="fa fa-edit" /> Sửa
            </div>
            <div className="btn btn-success xóa"
              onClick={(idUser)=>this.checkIdUser3(this.props.id)}
            >
              <i className="fa fa-edit" />
              Xóa
            </div>
          </td>
        </tr>
    );
  }
}

export default tabledata;
