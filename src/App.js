import HorizontalLinearStepper from "./components/steps";
import { FindHotels } from "./pages/find-hotels";
import { Reservation } from "./pages/reservation";

function App() {
  return (
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
  );
}

export default App;
