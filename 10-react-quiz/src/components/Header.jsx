export default function Header() {
  return (
    <header className="flex items-center">
      <img
        src="/src/assets/react.svg"
        className="w-[140px] me-3.5"
        alt="react logo"
      />
      <h1 className="text-7xl " style={{ fontFamily: "cursive" }}>
        The React Quiz
      </h1>
    </header>
  );
}
