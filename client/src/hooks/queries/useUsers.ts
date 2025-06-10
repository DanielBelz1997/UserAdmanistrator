import { useQuery } from "@tanstack/react-query";
import { userApi } from "@/lib/api";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => userApi.getUsers(),
  });
};
