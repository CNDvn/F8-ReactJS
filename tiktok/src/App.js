import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import GlobalStyles from "./components/GlobalStyles";
import Button from "./components/Button";

function App() {
  return (
    <GlobalStyles>
      <div style={{ padding: "0 32px" }}>
        <Button primary />
      </div>
    </GlobalStyles>
  );
}

export default App;
