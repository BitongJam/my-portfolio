type Props = { children: React.ReactNode; href?: string };

export default function Button({ children, href = '#' }: Props) {
  return <a className="btn" href={href}>{children}</a>;
}
