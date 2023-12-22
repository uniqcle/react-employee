import "./app-info.css";

const AppInfo = ({ allEmploy, count }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников СибАгро Трейд</h1>
      <h3>Общее число сотрудников: {allEmploy} </h3>
      <p>Премию получат: {count()}</p>
    </div>
  );
};

export default AppInfo;
