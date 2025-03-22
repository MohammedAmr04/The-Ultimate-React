import { useState, useRef } from "react";

export default function App() {
  const countRef = useRef(0);
  const { position, error, isLoading, handleClick } = useGeolocation();
  const handle = () => {
    handleClick();
    countRef.current = countRef.current + 1;
  };
  return (
    <div>
      <button onClick={handle}>Get my position</button>
      <br />
      <br />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {position && (
        <p>
          your position is
          <a
            href={`https://www.google.com/maps?q=${position.lat},${position.lng}`}
            target="_blank"
          >
            {position.lat}, {position.lng}
          </a>
        </p>
      )}
      <p>Count: {countRef.current}</p>
    </div>
  );
}
function useGeolocation() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      () => {
        setError("User denied geolocation access");
        setIsLoading(false);
      }
    );
  };
  return { position, error, isLoading, handleClick };
}
