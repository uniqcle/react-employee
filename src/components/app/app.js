import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import AddForm from "../add-form/add-form";

function App() {

	const data = [
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
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployersList data={data} />
      <AddForm />
    </div>
  );
}

export default App;
