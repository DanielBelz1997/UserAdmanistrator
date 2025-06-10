import { useState } from "react";
import { useCreateUser } from "@/hooks/queries/useCreateUser";
import { UserFormDialog } from "./users/UserFormDialog";
import type { CreateUserDialogProps } from "@/lib/types";

export const CreateUserDialog = ({ form }: CreateUserDialogProps) => {
  const [error, setError] = useState<string | null>(null);
  const createMutation = useCreateUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.isFormValid) return;

    setError(null);
    try {
      await createMutation.mutateAsync(form.formData);
      form.closeCreateDialog();
    } catch (error: any) {
      console.error("Failed to create user:", error);
      const errorMessage =
        error?.response?.data?.message || "Failed to create user";
      setError(errorMessage);
    }
  };

  const handleClose = () => {
    setError(null);
    form.closeCreateDialog();
  };

  return (
    <UserFormDialog
      isOpen={form.isCreateDialogOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      formData={form.formData}
      onFormDataChange={form.updateFormData}
      isLoading={createMutation.isPending}
      isFormValid={form.isFormValid}
      error={error}
    />
  );
};
