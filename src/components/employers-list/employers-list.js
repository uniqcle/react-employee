import EmployerItem from "../employer-item/employer-item";

const EmployersList = ({ data, onDelete, onToggleIncrease, onToggleProp }) => {
  const elements = data.map((elem) => {
    const { id, ...elemProps } = elem;

    return (
      <EmployerItem
        key={id}
        {...elemProps}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }

        // name={elem.name}
        // surname={elem.surname}
        // salary={elem.salary}
      />
    );
  });

  return <>{elements}</>;
};

export default EmployersList;
