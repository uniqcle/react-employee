import EmployerItem from "../employer-item/employer-item";

const EmployersList = ({ data }) => {
  const elements = data.map((elem) => {

    const { id, ...elemProps } = elem;

    return (
      <EmployerItem
        key={id}
        {...elemProps}
        // name={elem.name}
        // surname={elem.surname}
        // salary={elem.salary}
      />
    );
  });

  return <>{elements}</>;
};

export default EmployersList;
