import { useRouteError } from "react-router-dom";

export function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Error: {error.message}</h1>
    </div>
  );
}
