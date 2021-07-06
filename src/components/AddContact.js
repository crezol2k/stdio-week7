import React, { Component } from "react";

export class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    this.props.handleAddContact(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <h1 className="heading-main">Contacts</h1>

        <form onSubmit={this.add} className="form-control">
          <label>
            Name
            <input
              type="text"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="example@email.com"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </label>
          <button type="submit" className="btn">
            Add user
          </button>
        </form>
      </>
    );
  }
}

export default AddContact;
