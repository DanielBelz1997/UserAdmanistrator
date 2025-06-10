import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { SearchBarProps } from "@/lib/types";

export const SearchBar = ({
  onSearchChange,
  placeholder = "Search users...",
}: SearchBarProps) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={placeholder}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-8"
        />
      </div>
    </div>
  );
};
