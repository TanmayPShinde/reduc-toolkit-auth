import { useSelector } from "react-redux";
function Home() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <h4>Home</h4>
      {user ? (
        <>
          <h1>Welcome, {user["name"]}!!</h1>
          <h2>Hope you're enjoying your day!</h2>
        </>
      ) : (
        <h2>Please Login or Register.</h2>
      )}
    </>
  );
}

export default Home;
