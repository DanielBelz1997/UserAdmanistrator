import { useMemo } from "react";
import type { User } from "@/lib/types";

export const useFilteredUsers = (users: User[], searchQuery: string) => {
  return useMemo(() => {
    if (!searchQuery.trim()) {
      return users;
    }

    const lowercaseQuery = searchQuery.toLowerCase().trim();
    return users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(lowercaseQuery) ||
        user.last_name.toLowerCase().includes(lowercaseQuery) ||
        user.email.toLowerCase().includes(lowercaseQuery) ||
        user.id.toString().includes(lowercaseQuery)
    );
  }, [users, searchQuery]);
};
