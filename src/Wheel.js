// import "./styles.css";
import WheelComponent from "react-wheel-of-prizes";

const Wheel = () => {
  const segments = [" Smart TV", "Phone", " Watch", "Laptop", "HeadPhone", "Tablet"];
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];

  const onFinished = (winner) => {
    console.log(winner);
  };

  return (
      <div>
         <h1> Plz click on Spin button for Prizes !</h1>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={50}
          downDuration={600}
          fontFamily="Arial"
        />
      </div>
  );
}

export default Wheel;