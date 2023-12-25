import { Component } from "react";

//import "./add-form.css";
import "./add-form.scss";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      salary: 0,
      increase: false,
      rise: false,
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  render() {
    const { onAdd } = this.props;
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          onSubmit={(e) => onAdd(e, this.state)}
          className="add-form d-flex"
        >
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в руб.?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default AddForm;
