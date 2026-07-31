type Props = {
  text: string;
  color?: "red" | "orange" | "green" | "blue";
};

export default function Badge({
  text,
  color = "orange",
}: Props) {
  const colors = {
    red: "bg-red-500/15 text-red-400 border border-red-500/30",
    orange: "bg-orange-500/15 text-orange-400 border border-orange-500/30",
    green: "bg-green-500/15 text-green-400 border border-green-500/30",
    blue: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
  };

  return (
    <span
      className={`rounded-full px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wide ${colors[color]}`}
    >
      {text}
    </span>
  );
}
