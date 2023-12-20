import EmployerItem from "../employer-item/employer-item";

const EmployersList = ({ data }) => {
  const elements = data.map((elem) => {
    return (
      <EmployerItem
        {...elem}
        // name={elem.name}
        // surname={elem.surname}
        // salary={elem.salary}
      />
    );
  });

  return <>{elements}</>;
};

export default EmployersList;
