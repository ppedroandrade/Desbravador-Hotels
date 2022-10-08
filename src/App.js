import HorizontalLinearStepper from "./components/steps";
import { FindHotels } from "./pages/find-hotels";
import { Reservation } from "./pages/reservation";
// import backgroud from "./imgs/backgroud.png";

function App() {
  return (
    <>
      {/* <img
        alt=""
        src={backgroud}
        style={{
          width: "100vw",
          position: "absolute",
          overflow: "hidden",
          zIndex: "-1",
          height: "100vh",
          filter: 'blur(3px)',
        }}
      /> */}
      <div className="App">
        <HorizontalLinearStepper
          steps={[
            {
              label: "Buscar hotels",
              page: <FindHotels />,
            },
            { label: "Reserva", page: <Reservation /> },
          ]}
        />
      </div>
    </>
  );
}

export default App;
