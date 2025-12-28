import Header from "../components/Header";
import AssignmentCard from "../components/AssignmentCard";
import "../styles/pages/assignment-list.scss";

function AssignmentList() {
  const assignments = [
    { id: 1, title: "Select All Users", difficulty: "Easy" },
    { id: 2, title: "Find Active Customers", difficulty: "Medium" },
    { id: 3, title: "Revenue by Country", difficulty: "Hard" },
  ];

  return (
    <div className="assignment-list">
      <Header />

      <div className="assignment-list__container">
        {assignments.map((a) => (
          <AssignmentCard
            key={a.id}
            title={a.title}
            difficulty={a.difficulty}
            description={a.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AssignmentList;
