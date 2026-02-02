import { useState } from "react";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";
import type { User } from "./types/user";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        User Profile Manager (TS)
      </h1>

      <UserForm onAddUser={addUser} />

      <div className="grid gap-4">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;