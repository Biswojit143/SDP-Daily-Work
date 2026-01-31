import type { User } from "../types/user";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="border p-4 rounded bg-white shadow">
      <h3 className="font-semibold text-lg">{user.name}</h3>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm">Age: {user.age}</p>
    </div>
  );
};

export default UserCard;