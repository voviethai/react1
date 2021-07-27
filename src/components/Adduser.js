import React, { Component } from "react";

class Adduser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      name:"",
      tel:"",
      permission:"",
    };
  }
  ischange=(event)=>{
    const name = event.target.name;
    const val = event.target.value;
    this.setState({
      [name] : val,
    })
    // var item={};
    // item.id=this.state.id;
    // item.name=this.state.name;
    // item.tel=this.state.tel;
    // item.permission=this.state.permission;
    // console.log(item);
    
 }
  ThaydoiTrangthai = () => {
    this.setState({
      trangthai: !this.state.trangthai,
    });
  };
  hienThiForm1 = () => {

      return (
        <div className="col">
          <form>
          <div
            className="card border-primary mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <h3 className="card-header">Thêm Mới User</h3>
            <div className="card-body text-primary">
              <lable>Tên:</lable>
              <br />
              <input
                type="text"
                onChange={(event) => {
                  this.ischange(event);
                }}
                name="name"
                placeholder="Nhập tên"
              />
              <br />
              <lable>SĐT:</lable>
              <br />
              <input
                type="text"
                onChange={(event) => {
                  this.ischange(event);
                }}
                name="tel"
                placeholder="Nhập sđt"
              />
              <br />
              <br />

              <select
                name="permission"
                onChange={(event) => {
                  this.ischange(event);
                }}
                style={{ width: 180 }}
              >
                <option>Quyền truy cập</option>
                <option value={1}>Admin</option>
                <option value={2}>moderator</option>
                <option value={3}>normal</option>
              </select>
              <br />
              <br />
              <input
                type="reset"
                onClick={(name,tel,permission)=>this.props.Data1(this.state.name, this.state.tel, this.state.permission)}
                className="btn btn-primary btn-block"

               value="Thêm mới User" 
                  />
            </div>
          </div>
          </form>
        </div>
      );
  };

  // HienthiForm = () => {
  //   if (this.state.trangthai === true) {
  //     return (

  //     );
  //   }
  // };
  // HienthiNut = () => {
  //   if (this.state.trangthai === true) {
  //     return (
  //       <div
  //         className="btn btn-block btn-outline-secondary mb-3"
  //         onClick={this.ThaydoiTrangthai}
  //       >
  //         Đóng lại{" "}
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div
  //         className="btn btn-block btn-outline-primary mb-3"
  //         onClick={this.ThaydoiTrangthai}
  //       >
  //         Thêm mới{" "}
  //       </div>
  //     );
  //   }
  // };
  render() {
    return (
      <div>
        <div className="form-group">
        
          {this.hienThiForm1()}
        </div>
      </div>
    );
  }
}

export default Adduser;
