export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface UpdateUserData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export type EditUserDialogProps = {
  form: {
    formData: UserFormData;
    isFormValid: boolean;
    updateFormData: (field: keyof UserFormData, value: string) => void;
    isEditDialogOpen: boolean;
    closeEditDialog: () => void;
    editingUser: User | null;
  };
};

export type UserTableProps = {
  searchQuery: string;
  onEditUser: (user: User) => void;
};

export type SearchBarProps = {
  onSearchChange: (query: string) => void;
  placeholder?: string;
};

export type UserFormDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  formData: UserFormData;
  onFormDataChange: (field: keyof UserFormData, value: string) => void;
  isLoading: boolean;
  isEdit?: boolean;
  isFormValid: boolean;
  error?: string | null;
};

export type UserFormData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type CreateUserDialogProps = {
  form: {
    formData: UserFormData;
    isFormValid: boolean;
    updateFormData: (field: keyof UserFormData, value: string) => void;
    isCreateDialogOpen: boolean;
    closeCreateDialog: () => void;
  };
};

export type ConfirmationDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isLoading?: boolean;
  variant?: "default" | "destructive";
};

export type AddUserProps = {
  onAddClick: () => void;
};
