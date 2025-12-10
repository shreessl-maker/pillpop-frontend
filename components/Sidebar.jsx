import { Link } from "react-router-dom";

export default function Sidebar({ links }) {
  return (
    <div className="w-56 bg-white shadow-md h-full p-4">
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.path}
              className="block px-3 py-2 rounded hover:bg-purple-100 text-primary font-medium"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
