export const ErrorComponent = () => {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-red-600">
          Error loading users
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          An unexpected error occurred. Please try again.
        </p>
      </div>
    </div>
  );
};
