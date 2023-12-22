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
    };

    this.maxId = 4;
  }

  addItem = (e, item) => {
    e.preventDefault();

    let newItem = { id: this.maxId++, ...item };

    this.setState(({ data }) => {
      let newData = [...data, newItem];
      console.log(newData);

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
    this.setState(({ data }) =>({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item; 
      })
    }))
  }

  countIncreaseEmployers = () => {

    return this.state.data.filter(empl => {
      return empl.increase === true
    }).length; 
  }

  render() {
    let allEmploy = this.state.data.length;

    return (
      <div className="app">
        <AppInfo allEmploy={allEmploy} count={this.countIncreaseEmployers} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployersList
          data={this.state.data}
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
