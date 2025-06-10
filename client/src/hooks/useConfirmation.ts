import { useState } from "react";

interface ConfirmationState {
  isOpen: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  variant?: "default" | "destructive";
  confirmLabel?: string;
  cancelLabel?: string;
}

export const useConfirmation = () => {
  const [confirmation, setConfirmation] = useState<ConfirmationState>({
    isOpen: false,
    title: "",
    description: "",
    onConfirm: () => {},
  });

  const showConfirmation = (options: Omit<ConfirmationState, "isOpen">) => {
    setConfirmation({ ...options, isOpen: true });
  };

  const hideConfirmation = () => {
    setConfirmation((prev) => ({ ...prev, isOpen: false }));
  };

  const confirm = () => {
    confirmation.onConfirm();
    hideConfirmation();
  };

  return { confirmation, showConfirmation, hideConfirmation, confirm };
};
