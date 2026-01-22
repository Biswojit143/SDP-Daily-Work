function UserCard({ name, age, isDeveloper }) {
  return (
    <div>
      <h2>User Card</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>
        Role: {isDeveloper ? "Developer" : "Non-Developer"}
      </p>
    </div>
  );
}

export default UserCard;
