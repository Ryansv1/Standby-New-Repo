interface Props {
  children: React.ReactNode;
  className: string;
}

const Container = ({ children, className }: Props) => {
  return <section className={className}>{children}</section>;
};

export default Container;
