import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4b49ac"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
      
    </div>
  );
};

export default Loader;
