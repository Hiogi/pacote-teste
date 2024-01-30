type ContentProps = {
  children: React.ReactNode;
  className?: string;
}

export default function Content({ children, className = '' }: ContentProps) {
  return (
    <div className={`flex p-6 ${className}`}>
      {children}
    </div>
  );

}