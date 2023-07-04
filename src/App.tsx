import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        s
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          aside{" "}
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        mian{" "}
      </GridItem>
    </Grid>
  );
}

export default App;
