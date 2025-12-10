export default function Navbar({ role }) {
  return (
    <nav className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">PillPopHQ</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm">Welcome, {role}</span>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          className="bg-white text-primary font-semibold px-3 py-1 rounded hover:bg-purple-100"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
