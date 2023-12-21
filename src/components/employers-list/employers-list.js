import EmployerItem from "../employer-item/employer-item";

const EmployersList = ({ data, onDelete }) => {
  const elements = data.map((elem) => {
    const { id, ...elemProps } = elem;

    return (
      <EmployerItem
        key={id}
        {...elemProps}
        onDelete={() => onDelete(id)}
        // name={elem.name}
        // surname={elem.surname}
        // salary={elem.salary}
      />
    );
  });

  return <>{elements}</>;
};

export default EmployersList;
