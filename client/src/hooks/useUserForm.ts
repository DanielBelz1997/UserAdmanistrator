import { useState } from "react";
import type { User } from "@/lib/types";
import type { UserFormData } from "@/lib/types";

export const useUserForm = () => {
  const [formData, setFormData] = useState<UserFormData>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const resetForm = () => {
    setFormData({ first_name: "", last_name: "", email: "", password: "" });
    setEditingUser(null);
  };

  const openCreateDialog = () => {
    resetForm();
    setIsCreateDialogOpen(true);
  };

  const closeCreateDialog = () => {
    setIsCreateDialogOpen(false);
    resetForm();
  };

  const openEditDialog = (user: User) => {
    setEditingUser(user);
    setFormData({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
    });
    setIsEditDialogOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
    resetForm();
  };

  const updateFormData = (field: keyof UserFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.last_name.trim() !== "" &&
    formData.first_name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.password.trim() !== "";

  return {
    formData,
    setFormData,
    isCreateDialogOpen,
    isEditDialogOpen,
    editingUser,
    resetForm,
    openCreateDialog,
    closeCreateDialog,
    openEditDialog,
    closeEditDialog,
    updateFormData,
    isFormValid,
  };
};
