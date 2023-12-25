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
          rise: false,
        },
        {
          id: 2,
          name: "Дмитрий",
          surname: "Акулов",
          salary: 180000,
          increase: false,
          rise: true,
        },
        {
          id: 3,
          name: "Галина",
          surname: "Михайлова",
          salary: 190000,
          increase: false,
          rise: false,
        },
      ],
      search: "",
    };

    this.maxId = 4;
  }

  addItem = (e, item) => {
    e.preventDefault();

    if (this.validateUserAdd(item)) {
      let newItem = { id: this.maxId++, ...item };

      this.setState(({ data }) => {
        let newData = [...data, newItem];
        console.log(newData);

        return {
          data: newData,
        };
      });
    }
    return;
  };

  validateUserAdd = (item) => {
    if (item && item.name !== "") {
      return true;
    }
    return false;
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

  onToggleIncrease = (id) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex(elem => {
    //     return elem.id === id
    //   })

    //   const oldObj = data[index];
    //   const newObj = {
    //     ...oldObj,
    //     increase: !oldObj.increase
    //   }
    //   const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)]

    //   return {
    //     data: newArr
    //   }
    // })

    //еще вариант
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            increase: !item.increase,
          };
        }
        return item;
      }),
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  countIncreaseEmployers = () => {
    return this.state.data.filter((empl) => {
      return empl.increase === true;
    }).length;
  };

  searchEmploy = (items, search) => {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(search) > -1;
    });
  };

  onUpdateSearch = (search) => {
    this.setState({ search: search });
  };

  render() {
    let allEmploy = this.state.data.length;
    const { data, search } = this.state;
    const visibleData = this.searchEmploy(data, search);

    return (
      <div className="app">
        <AppInfo allEmploy={allEmploy} count={this.countIncreaseEmployers} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>

        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleProp={this.onToggleProp}
        />
        <AddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
