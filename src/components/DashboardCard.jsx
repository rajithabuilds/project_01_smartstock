
function DashboardCard(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <h2>{props.value}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default DashboardCard;
