const AccessibleDropdown = () => {
  return (
    <div className="space-y-1">
      <label
        htmlFor="role"
        className="block text-sm font-medium"
      >
        Select Role
      </label>

      <select
        id="role"
        className="border p-2 w-full rounded"
      >
        <option>User</option>
        <option>Admin</option>
        <option>Manager</option>
      </select>
    </div>
  );
};

export default AccessibleDropdown;