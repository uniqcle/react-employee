import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import AddForm from "../add-form/add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          name: "Андрей",
          surname: "Анучкин",
          salary: 170000,
          increase: true,
        },
        {
          id: 2,
          name: "Дмитрий",
          surname: "Акулов",
          salary: 180000,
          increase: false,
        },
        {
          id: 3,
          name: "Галина",
          surname: "Михайлова",
          salary: 190000,
          increase: false,
        },
      ],
    };

    this.maxId = 4;
  }

  addItem = (e, item) => {
    e.preventDefault();

    let newItem = { id: this.maxId++, ...item };

    console.log(newItem);

    this.setState(({ data }) => {
      let newData = [ ...data,  newItem   ];
      console.log(newData)
      
      return {
        data: newData,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      //1.вар.
      const filtered = data.filter((el) => {
        return el.id !== id;
      });
      return {
        data: filtered,
      };

      //2.вар.
      // const index = data.findIndex((elem) => {
      //   return elem.id === id;
      // });

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newData = [...before, ...after];

      // return {
      //   data: newData,
      // };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployersList data={this.state.data} onDelete={this.deleteItem} />
        <AddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
