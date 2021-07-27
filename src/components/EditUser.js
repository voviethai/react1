import React, { Component } from "react";

class EditUser extends Component {
  constructor(props){
    super(props);
    this.state={
      id:this.props.editUserObject.id,
      Name:this.props.editUserObject.Name,
      phone:this.props.editUserObject.phone,
      permission:this.props.editUserObject.permission,
    }
  }
    ischange=(event)=>{
        const name = event.target.name;
        const val = event.target.value;
        this.setState({
          [name] : val,
        })
    }
    saveButton=(info)=>{
      info.id=this.state.id
      info.Name=this.state.Name
      info.phone=this.state.phone
      info.permission=this.state.permission
      this.props.changeEdit()
      this.props.getEditUser(info)
    }
    //props.getEditUser
    // props.changeEdit
    //this.props.editUserObject
    changeEdit=()=>{
      this.props.changeEdit()
    }
    ThaydoiTrangthai = () => {
        this.setState({
          trangthai: !this.state.trangthai,
        });}
  render() {
    // console.log(this.state);
    return (
      <div className="">
        <div className="form-group  ">
          <h3 className="card-header">Sửa thông tin User</h3>
          <div className="card-body bg-success text-white">
          <lable>Tên:</lable>
          <br />
          <input
            defaultValue={this.props.editUserObject.Name}
            type="text"
            onChange={(event) => {
              this.ischange(event);
            }} 
            className="form-control"
            name="Name"
            placeholder="Nhập tên"
            
          />
          <br />
          <lable>SĐT:</lable>
          <br />
          <input
           defaultValue={this.props.editUserObject.phone}
            type="text"
            className="form-control"
            onChange={(event) => {
              this.ischange(event);
            }}
            name="phone"
            placeholder="Nhập sđt"
          />
          <br />
          <br />
          {/* name="permission"
            onChange={(event) => {
              this.ischange(event);
            }}
       */}

<select className="form-control"
name="permission"
onChange={(event) => {
  this.ischange(event);
}}
 defaultValue={this.props.editUserObject.permission}
 aria-label="Default select example">
  <option selected>quyền truy cập</option>
  <option value={1}>admin</option>
  <option value={2}>moderator</option>
  <option value={3}>normal</option>
</select>
          <br />
          <br />
          <input
            type="reset"
            // onClick={(name, tel, permission) =>
            //   this.props.Data1(
            //     this.state.name,
            //     this.state.tel,
            //     this.state.permission
            //   )
            //}
            onClick={(info)=>this.saveButton(info)}
            className="btn btn-primary btn-block"
            value="Lưu"
          />
        </div>
        </div>
      </div>
    );
  }
}

export default EditUser;
