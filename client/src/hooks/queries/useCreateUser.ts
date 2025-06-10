import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userApi } from "@/lib/api";
import type { CreateUserData } from "@/lib/types";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: CreateUserData) => userApi.createUser(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
