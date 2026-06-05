export default function Container({ children, className = '' }) {
  return (
    <div className={`w-full max-w-[1280px] mx-auto px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}
