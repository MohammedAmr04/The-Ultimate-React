import Header from "./Components/header/Header";
import Box from "./Components/box/Box";
export default function App() {
  return (
    <div className="bg-[#212529] h-screen px-16 py-4">
      <Header />
      <main className="flex gap-4 mt-4 justify-center items-center  rounded-lg p-4 h-screen">
        <Box />
        <Box />
      </main>
    </div>
  );
}
