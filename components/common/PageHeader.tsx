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
      <h1 className="font-display text-4xl font-bold text-neutral-100 md:text-5xl">
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
