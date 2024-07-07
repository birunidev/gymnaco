import { Link } from "react-router-dom";
import Button from "../UI/Button";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="py-3">
      <div className="custom-container flex items-center justify-between md:justify-center">
        <Logo />
        <Link to="/get-demo">
          <Button className="md:absolute top-3 right-3 xl:top-6 xl:right-6">
            Get Demo
          </Button>
        </Link>
      </div>
    </header>
  );
}
