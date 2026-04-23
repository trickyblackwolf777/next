interface HeaderProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Header({
  title = "Welcome",
  subtitle,
  className = "",
}: HeaderProps) {
  return (
    <header
      className={`bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg ${className}`}
    >
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-blue-100 text-lg sm:text-xl">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
