import { homeBgColor } from "../colors";

const Home = () => {
  return (
    <div
      className={`${homeBgColor} text-white text-2xl h-full w-full flex justify-center items-center`}
    >
      This is Home page
    </div>
  );
};

export default Home;
