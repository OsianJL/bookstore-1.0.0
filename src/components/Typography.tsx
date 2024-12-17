interface TypographyProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

function Typography({ children, as = 'p' }: TypographyProps) {
  const Tag = as;
  return <Tag>{children}</Tag>;
}

export default Typography;
