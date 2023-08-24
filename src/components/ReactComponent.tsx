import { useState } from "react";

export default function ReactComponent() {
  const [title] = useState("React Component");

  return <div>{title}</div>;
}
