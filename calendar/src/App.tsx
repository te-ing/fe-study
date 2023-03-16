import DateInput from "components/dateInput";
import "scss/index.scss";

function App() {
  // eslint-disable-next-line no-console
  return <DateInput clickDay={(day) => console.log(day)} />;
}

export default App;
