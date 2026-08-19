type QBMarkProps = {
  className?: string;
};

/**
 * The QBCore interlocking "qb" ring mark. Uses currentColor so callers
 * control color via a text-* utility class (defaults to brand red where
 * unset, matching the official mark).
 */
export default function QBMark({ className = "h-8 w-8" }: QBMarkProps) {
  return (
    <svg
      viewBox="0 0 751.95 694.88"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M697.41,211.72c-64.8-64.81-165.54-72.3-238.67-22.51V.56H376.5V279.32l-31.26-38.59a190.31,190.31,0,0,0-23.8-29c-73.3-73.3-192.56-73.3-265.85,0A188,188,0,0,0,294.26,500.08V695.44H376.5V410l31.31,38.65a190.12,190.12,0,0,0,23.75,28.95A188,188,0,1,0,697.41,211.72ZM263.28,419.41A105.71,105.71,0,1,1,262,268.68h0c.42.4.85.78,1.25,1.19a105.83,105.83,0,0,1,0,149.54Zm376,0A105.84,105.84,0,0,1,491,420.6c-.42-.4-.85-.78-1.25-1.19a105.74,105.74,0,1,1,149.54,0Z"
        transform="translate(-0.53 -0.56)"
      />
    </svg>
  );
}
