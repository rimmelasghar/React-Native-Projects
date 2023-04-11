import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "./components/Row";
import CalcButton from "./components/Button";
import calculator, { initialState } from "./util/calculator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});

export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <Row>
            <CalcButton
              text="C"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
            />
            <CalcButton
              text="+/-"
              theme="secondary"
              onPress={() => this.handleTap("posneg")}
            />
            <CalcButton
              text="%"
              theme="secondary"
              onPress={() => this.handleTap("percentage")}
            />
            <CalcButton
              text="/"
              theme="accent"
              onPress={() => this.handleTap("operator", "/")}
            />
          </Row>

          <Row>
            <CalcButton text="7" onPress={() => this.handleTap("number", 7)} />
            <CalcButton text="8" onPress={() => this.handleTap("number", 8)} />
            <CalcButton text="9" onPress={() => this.handleTap("number", 9)} />
            <CalcButton
              text="x"
              theme="accent"
              onPress={() => this.handleTap("operator", "*")}
            />
          </Row>

          <Row>
            <CalcButton text="4" onPress={() => this.handleTap("number", 4)} />
            <CalcButton text="5" onPress={() => this.handleTap("number", 5)} />
            <CalcButton text="6" onPress={() => this.handleTap("number", 6)} />
            <CalcButton
              text="-"
              theme="accent"
              onPress={() => this.handleTap("operator", "-")}
            />
          </Row>

          <Row>
            <CalcButton text="1" onPress={() => this.handleTap("number", 1)} />
            <CalcButton text="2" onPress={() => this.handleTap("number", 2)} />
            <CalcButton text="3" onPress={() => this.handleTap("number", 3)} />
            <CalcButton
              text="+"
              theme="accent"
              onPress={() => this.handleTap("operator", "+")}
            />
          </Row>

          <Row>
            <CalcButton
              text="0"
              size="double"
              onPress={() => this.handleTap("number", 0)}
            />
            <CalcButton text="." onPress={() => this.handleTap("number", ".")} />
            <CalcButton
              text="="
              theme="accent"
              onPress={() => this.handleTap("equal")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}