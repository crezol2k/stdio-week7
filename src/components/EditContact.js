import React, { Component } from "react";

export class EditContact extends Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;

    this.state = {
      id: id,
      name: name,
      email: email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    this.props.handleEditContact(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <h2 className="heading-sub">Edit contacts</h2>

        <form onSubmit={this.update} className="form-control">
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
            Update user
          </button>
        </form>
      </>
    );
  }
}

export default EditContact;
