import "./ListOfUsers.css";

export function ListOfUsers({ data }) {
  return (
    <ul className="user-list">
      {data?.map((user) => (
        <li key={user.id} className="user-card">
          <div className="user-card-content">
            <h3>{user.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
