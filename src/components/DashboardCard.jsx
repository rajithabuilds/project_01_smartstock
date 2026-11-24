
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

// function DashboardCard({ title, value, description }) {
//   return (
//     <div className="card">
//       <h3>{title}</h3>
//       <h2>{value}</h2>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default DashboardCard;