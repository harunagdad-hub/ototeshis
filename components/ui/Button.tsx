type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600 ${className}`}
    >
      {children}
    </button>
  );
}