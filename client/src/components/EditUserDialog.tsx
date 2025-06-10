import { useState } from "react";

import { UserFormDialog } from "./users/UserFormDialog";
import { useUpdateUser } from "@/hooks/queries/useUpdateUser";

import type { EditUserDialogProps } from "@/lib/types";

export const EditUserDialog = ({ form }: EditUserDialogProps) => {
  const { editingUser, closeEditDialog, formData, isFormValid } = form;

  const [error, setError] = useState<string | null>(null);
  const updateMutation = useUpdateUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || !editingUser) return;

    setError(null);

    try {
      await updateMutation.mutateAsync({
        id: editingUser.id,
        userData: formData,
      });
      closeEditDialog();
    } catch (error: any) {
      console.error("Failed to update user:", error);
      const errorMessage =
        error?.response?.data?.message || "Failed to update user";
      setError(errorMessage);
    }
  };

  const handleClose = () => {
    setError(null);
    closeEditDialog();
  };

  return (
    <UserFormDialog
      isOpen={form.isEditDialogOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      formData={form.formData}
      onFormDataChange={form.updateFormData}
      isLoading={updateMutation.isPending}
      isEdit={true}
      isFormValid={form.isFormValid}
      error={error}
    />
  );
};
