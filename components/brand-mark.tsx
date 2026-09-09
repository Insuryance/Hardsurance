interface BrandMarkProps {
  className?: string;
}

/** An original Hardsurance mark: four connected risk signals around a core. */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 2.75c1.9 4.72 4.53 7.35 9.25 9.25C20.53 13.9 17.9 16.53 16 21.25 14.1 16.53 11.47 13.9 6.75 12 11.47 10.1 14.1 7.47 16 2.75Z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M16 10.75c1.08 2.69 2.56 4.17 5.25 5.25-2.69 1.08-4.17 2.56-5.25 5.25-1.08-2.69-2.56-4.17-5.25-5.25 2.69-1.08 4.17-2.56 5.25-5.25Z"
        fill="currentColor"
        fillOpacity=".2"
      />
      <circle cx="16" cy="16" r="2.15" fill="currentColor" />
      <path d="M7.4 19.3 4.1 22.6M24.6 19.3l3.3 3.3" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
      <circle cx="3.35" cy="23.35" r="1.35" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="28.65" cy="23.35" r="1.35" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}
