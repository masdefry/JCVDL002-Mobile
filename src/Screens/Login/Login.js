import React from 'react';
import { Button, Container, Content, Grid, Input, Item, Label, Row, Text } from 'native-base';

// Utilities
import color from './../../Supports/Styles/Color'
import spacing from './../../Supports/Styles/Spacing';
import font from './../../Supports/Styles/Font';

const Login = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Grid>
          <Row style={{ ...spacing.plFive, ...spacing.ptFive }}>
            <Text style={{ ...font.fsFive, ...font.fStyleBold }}>
              Sign In
            </Text>
          </Row>
          <Row style={{ ...spacing.plFive, ...spacing.ptFive }}>
            <Text style={{ ...font.fsEight, ...font.fStyleBold }}>
              Welcome!
            </Text>
          </Row>
          <Row style={{ ...spacing.plFive }}>
            <Text>
              Enter your account to continue booking!
            </Text>
          </Row>
          <Row style={{ ...spacing.pxFive, ...spacing.ptEight }}>
            <Item floatingLabel style={{ width: '100%' }}>
                <Label>Email</Label>
                <Input />
              </Item>
          </Row>
          <Row style={{ ...spacing.pxFive, ...spacing.ptFive }}>
            <Item floatingLabel style={{ width: '100%' }}>
                <Label>Password</Label>
                <Input />
              </Item>
          </Row>
          <Row style={{ justifyContent: 'flex-end', ...spacing.prFive, ...spacing.ptThree }}>
            <Text style={{ color: 'blue', ...font.fStyleBold }}>
              Forgot Password
            </Text>
          </Row>
          <Row style={{ ...spacing.pxFive, ...spacing.ptFive }}>
            <Button rounded danger style={{ width: '100%' }}>
              <Text style={{ textAlign: 'center', width: '100%' }}> 
                Sign In
              </Text>
            </Button>
          </Row>
          <Row style={{ justifyContent: 'center', ...spacing.ptFive }}>
            <Text onPress={() => navigation.navigate('Register')}>
              Don't have account? Signup
            </Text>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default Login;