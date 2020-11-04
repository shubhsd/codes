import * as React from "react";
import { Text, TextInput, SafeAreaView, StyleSheet, Button } from 'react-native';
import CustomButton from "./src/Components/CustomButton";
import Container from "./src/Components/Container";
import { PrimaryTheme } from "./src/styles/Themes";

// We will define our types in interface
interface State {
  emailTextInput: string;
  passwordTextInput: string;
}

interface Props {

}

enum InputType {
  EMAIL = 'Email',
  PASSWORD = 'Password',
  
}

export class App extends React.Component<Props, State>{
  private passwordInputRef;
  constructor(props) {
    super(props);
    this.state = {
      emailTextInput: '',
      passwordTextInput: ''
    }
  }

  updateTextInput = (value, type) => {
    switch (type) {
      case InputType.EMAIL: {
        this.setState({ emailTextInput: value });
        break;
      }
      case InputType.PASSWORD: {
        this.setState({ passwordTextInput: value });
        break;
      }
    }
  };

  handleLogin = () => {
    console.log('login');
  };

  render() {
    return (
      // <SafeAreaView style={styles.container}>
      <Container containerStyles={{ alignItems: 'center', backgroundColor: '#fff' }}>
        <Text style={{ color: PrimaryTheme.$TEXT_COLOR_900, fontSize: 36, marginBottom: 10, letterSpacing: 5, fontFamily: 'Muli' }}>Login</Text>
        <TextInput
          onSubmitEditing={() => this.passwordInputRef.focus()}
          returnKeyType={'next'}
          onChangeText={(value) => this.updateTextInput(value, InputType.EMAIL)}
          style={styles.textInput}
          placeholder={'Email'}
          value={this.state.emailTextInput}
        />
        <TextInput
          onSubmitEditing={this.handleLogin}
          ref={ref => this.passwordInputRef = ref}
          returnKeyType={'done'}
          onChangeText={(value) => this.updateTextInput(value, InputType.PASSWORD)}
          style={styles.textInput}
          placeholder={'Password'}
          value={this.state.passwordTextInput}
        />
        <CustomButton title={'Login'} onPress={this.handleLogin} />
      </Container>
      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'stretch'
  // }
  textInput: {
    width: 300,
    borderWidth: 1,
    marginBottom: 10
  }
});
