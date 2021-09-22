import React from 'react';
import {Button, Col, Container, Content, Grid, Input, Item, Label, Row, Text} from 'native-base';

// Utilities
import color from './../../Supports/Styles/Color'
import spacing from './../../Supports/Styles/Spacing'
import font from './../../Supports/Styles/Font'

const Login = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Grid style={{ justifyContent: 'flex-end', ...spacing.pxFive, ...spacing.pyFive }}>
          <Row>
            <Text style={{ ...font.fsFive, ...font.fStyleBold }}>
              Sign In
            </Text>
          </Row>
          <Row style={{ ...spacing.mtFive }}>
            <Text style={{ ...font.fsEight, ...font.fStyleBold }}>
              Welcome!
            </Text>
          </Row>
          <Row>
            <Text>
              Enter your account to continue booking!
            </Text>
          </Row>
          <Row style={{ ...spacing.mtEight }}>
            <Item floatingLabel style={{ width: '100%' }}>
              <Label>Email</Label>
              <Input style={{ width: '100%' }} />
            </Item>
          </Row>
          <Row style={{ ...spacing.mtFive }}>
            <Item floatingLabel style={{ width: '100%' }}>
              <Label>Password</Label>
              <Input style={{ width: '100%' }} />
            </Item>
          </Row>
          <Row style={{ justifyContent: 'flex-end', ...spacing.mtThree }}>
            <Text style={{ color: 'blue', ...font.fStyleBold }}>
              Forgot Password
            </Text>
          </Row>
          <Row>
            <Button rounded block danger style={{ width: '100%', ...spacing.mtFive }}>
              <Text>SIGN IN</Text>
            </Button>
          </Row>
          <Row style={{ justifyContent: 'center', ...spacing.mtEight }}>
            <Text onPress={() => navigation.navigate('Register')}>
              Don't have account? Sign Up
            </Text>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default Login;