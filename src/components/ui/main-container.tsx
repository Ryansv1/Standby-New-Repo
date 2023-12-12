interface Props {
  children: React.ReactNode;
  className: string;
}

export default function MainContainer({ children, className }: Props) {
  return <main className={className}>{children}</main>;
}
