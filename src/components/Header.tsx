interface Props {
  title: string;
}
const Header = ({ title }: Props) => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">
          {title}
        </a>
      </div>
    </nav>
  );
};

export default Header;
