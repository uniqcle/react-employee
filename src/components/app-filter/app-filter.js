import "./app-filter.css";

const AppFilter = ({ filter, onToggleFilter }) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники", colored: false },
    { name: "increase", label: "На повышение", colored: false },
    { name: "rise", label: "З/П больше 100 000 руб.", colored: true },
  ];

  const buttons = buttonsData.map(({ name, label, colored }) => {
    const active = filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";

    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        data-filter={name}
        key={name}
        onClick={onToggleFilter}
        //динамические стили
        style={colored ? { color: "orange" } : null}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group app-filter">{buttons}</div>;
};

export default AppFilter;
