import "./app-filter.css";

const AppFilter = ({ filter, onToggleFilter }) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "increase", label: "На повышение" },
    { name: "rise", label: "З/П больше 100 000 руб." },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";

    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        data-filter={name}
        key={name}
        onClick={onToggleFilter}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group app-filter">{buttons}</div>;
};

export default AppFilter;
