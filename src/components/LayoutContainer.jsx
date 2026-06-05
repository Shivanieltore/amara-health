export default function LayoutContainer({ children, className = '' }) {
  return (
    <div
      style={{
        maxWidth: '1280px',
        marginInline: 'auto',
        paddingInline: '32px',
        width: '100%',
      }}
      className={className}
    >
      {children}
    </div>
  );
}
