import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import type { AddUserProps } from "@/lib/types";

export const AddUser = ({ onAddClick }: AddUserProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <p className="text-muted-foreground">Checkpoint Assignment</p>
      </div>

      <Button onClick={onAddClick}>
        <Plus className="mr-2 h-4 w-4" />
        Add User
      </Button>
    </div>
  );
};
