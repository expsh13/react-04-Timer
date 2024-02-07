import { useState } from "react";

export const App = () => {
  const [time, setTime] = useState<string>("00:00:00");
  return (
    <input
      type="time"
      value={time}
      step="1"
      onChange={(e) => setTime(e.currentTarget.value)}
    />
  );
};
