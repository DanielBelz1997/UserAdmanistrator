import { useState } from "react";
import { SearchBar, UserTable } from "@/components/users";
import { AddUser } from "./AddUser";
import { CreateUserDialog } from "./CreateUserDialog";
import { EditUserDialog } from "./EditUserDialog";
import { useUserForm } from "@/hooks/useUserForm";

const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const form = useUserForm();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col space-y-6">
        <AddUser onAddClick={form.openCreateDialog} />
        <SearchBar onSearchChange={setSearchQuery} />
        <UserTable searchQuery={searchQuery} onEditUser={form.openEditDialog} />
        <CreateUserDialog form={form} />
        <EditUserDialog form={form} />
      </div>
    </div>
  );
};

export default UserManagement;
