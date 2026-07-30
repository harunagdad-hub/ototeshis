type Props = {
  text: string;
  color?: "red" | "orange" | "green" | "blue";
};

export default function Badge({
  text,
  color = "orange",
}: Props) {
  const colors = {
    red: "bg-red-500/20 text-red-400",
    orange: "bg-orange-500/20 text-orange-400",
    green: "bg-green-500/20 text-green-400",
    blue: "bg-blue-500/20 text-blue-400",
  };

  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-semibold ${colors[color]}`}
    >
      {text}
    </span>
  );
}