export default function Header() {
  return (
    <div className="header mx-auto rounded-[.9rem]  px-5 py-4 flex items-center gap-x-2 justify-between bg-[#6741d9] text-white">
      <div className="logo text-2xl font-bold">
        <span role="img" aria-label="popcorn">
          🍿
        </span>
        usePopcorn
      </div>
      <input
        className="w-[30%] rounded-md px-5 py-2.5 bg-[#7950f2] text-white  focus:outline-none focus:translate-y-[-5px] transition-all duration-300 font-bold "
        type="search"
        name="search"
        placeholder="Search movies..."
      />
      <div className="num-results text-sm font-bold">
        <p>
          Found <strong>100</strong> results
        </p>
      </div>
    </div>
  );
}
