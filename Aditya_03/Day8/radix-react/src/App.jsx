import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function App() {
  return (
    <div className="p-20">
      <DropdownMenu.Root>

        <DropdownMenu.Trigger className="bg-green-600 text-white px-4 py-2 rounded">
          Open Menu
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          className="bg-white shadow rounded w-40 p-1"
          sideOffset={5}
        >
          <DropdownMenu.Item className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
            Profile
          </DropdownMenu.Item>

          <DropdownMenu.Item className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
            Settings
          </DropdownMenu.Item>

          <DropdownMenu.Item className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>

      </DropdownMenu.Root>
    </div>
  );
}
