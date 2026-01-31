import { useState } from "react";
import type { User } from "../types/user";

interface UserFormProps {
  onAddUser: (user: User) => void;
}

const UserForm = ({ onAddUser }: UserFormProps) => {
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    age: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        name === "age" ? Number(value) : value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    onAddUser(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="age"
        placeholder="Age"
        type="number"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add User
      </button>
    </form>
  );
};

export default UserForm;