import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    age: 0,
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
    this.props.addContactHandle(this.state);
    this.setState({ name: "", email: "", age: 0 });
    this.props.history.push("/");
  };
  render() {
    return (
      <form className="form-control form-css" onSubmit={this.add}>
        <label className="mb-12">
          Tên user
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
        </label>
        <label className="mb-12">
          Email
          <input
            type="email"
            name="name"
            value={this.state.email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
        </label>
        <label className="mb-12">
          Tuổi
          <input
            type="number"
            value={this.state.age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />
        </label>

        <div className="confirm">
          <button type="submit" className="btn btn-success ml-12">
            Thêm
          </button>
        </div>
      </form>
    );
  }
}

export default AddContact;
