import { useState } from "react";
import Alerts from "./components/Alerts";
import ListGroup from "./components/ListGroup";
import AlertButton from "./components/AlertButton";

const cities = [
  "Chennai",
  "Madurai",
  "Nagercoil",
  "Thirunelveli",
  "Coimbatore",
];

//const [selectedCity, setSelectedCity] = useState("");
let selectedCity: String = "None";

const handleSelectItem = (city: String) => {
  console.log(city);
  selectedCity = city;
};

function App() {
  //const [showCity, setShowCity] = useState(false);
  const [alertVisibility, setAlertVisibility] = useState(false);
  //const [selectedCity, setSelectedCity] = useState("");

  const showAlert = (alert: boolean) => {
    setAlertVisibility(alert);
  };

  return (
    <div>
      <ListGroup
        cities={cities}
        heading={"Major Cities of TN"}
        onSelectItem={handleSelectItem}
      />
      {alertVisibility && (
        <Alerts city={selectedCity} onClose={() => setAlertVisibility(false)} />
      )}
      <AlertButton showAlert={showAlert} />
    </div>
  );
}

export default App;
