type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-10">
      <h1 className="text-5xl font-bold text-white">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-3 text-lg text-neutral-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}