import React, { Component } from "react";
import "../App.css";
import EditUser from "./EditUser";
class header extends Component {
  constructor(props){
    super(props);
    this.state={
      trunggian: "",
      
     
    }
  }

      // console.log(info.permission);
  //this.props.getEditUser
  //this.props.Edit1
  //this.props.changEdit
  ischange=(event)=>{
    console.log(event.target.value)
    this.setState({
      trunggian: event.target.value ,
    })
    this.props.checkconnectprops(this.state.trunggian)
  }
    hienThiNut2=()=>{
        if(this.props.hienThiNut1===true){
            return    <div
            className="btn btn-block btn-outline-secondary mb-3"
            onClick={this.props.thayDoiTrangThai1}
          >
            Đóng lại
          </div>
        }else{
          return <div
          className="btn btn-block btn-outline-primary mb-3"
          onClick={this.props.thayDoiTrangThai1}
        >
          Thêm mới
        </div>
        }
    }
    isShowUser=()=>{
      if(this.props.Edit1===true){
        return (<EditUser 
          getEditUser ={(info)=>this.props.getEditUser(info)}
          editUserObject={this.props.editUserObject}
          changeEdit={()=>this.props.changeEdit()}
        
        />)
      }
    }
  render() {
    
    return (
      <div className="container">
        <div>
          <h1>
            project quản lý thành viên bằng reactjs <br /> bằng dữ liệu json
          </h1>
          <div>
            <hr />
           

            {this.hienThiNut2()}
          </div>
          <div className="col-12">
            {this.isShowUser()}
            
            <div className="form-group">
             
              <div className="btn-group">
                <input
                  type="text"
                  onChange={(event)=>this.ischange(event)}
                  className="form-control"
                  placeholder="Nhập từ khóa"
                  style={{ width: "400px" }}
                />
                <div className="btn btn-info" onClick={(dl)=>this.props.checkconnectprops(this.state.trunggian)} >Tìm</div>
              </div>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default header;
