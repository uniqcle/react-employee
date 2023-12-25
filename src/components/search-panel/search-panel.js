import { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onUpdateSearch = (e) => {
    const search = e.target.value;
    this.setState({ search });
    this.props.onUpdateSearch(search);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.search}
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default SearchPanel;
