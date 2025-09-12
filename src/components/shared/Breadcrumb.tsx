"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Breadcrumb({ className }: { className?: string }) {
  const pathName = usePathname();
  const parts = pathName.split("/").filter(Boolean);

  return (
    <nav className={`text-sm mb-4 ${className}`}>
      <ol className="flex space-x-2">
        {parts.map((part, idx) => {
          const href = "/" + parts.slice(0, idx + 1).join("/");
          const isLast = idx === parts.length - 1;
          return (
            <li key={href} className="flex items-center space-x-2">
              {!isLast ? (
                <Link
                  href={href}
                  className="text-gray-700 hover:underline capitalize"
                >
                  {part}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium capitalize">
                  {part}
                </span>
              )}
              {!isLast && <span>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
