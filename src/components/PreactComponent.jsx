import { useState } from "preact/hooks";

export default function PreactComponent() {
  const [title] = useState("Preact Component");

  return <div>{title}</div>;
}
