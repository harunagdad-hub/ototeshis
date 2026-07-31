import Link from "next/link";

type Item = {
  label: string;
  href: string;
};

type Props = {
  items: Item[];
};

export default function Breadcrumb({ items }: Props) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wide text-neutral-500">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          <Link href={item.href} className="hover:text-orange-400">
            {item.label}
          </Link>

          {index < items.length - 1 && (
            <span className="text-neutral-700">/</span>
          )}
        </div>
      ))}
    </div>
  );
}
