import React from 'react';
import { Button, Col, Container, Content, Grid, Input, Item, Label, Row, Text } from 'native-base';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

// Utilities
import color from './../../Supports/Styles/Color'
import spacing from './../../Supports/Styles/Spacing';
import font from './../../Supports/Styles/Font';

const Register = () => {
  return (
    <Container>
      <Content>
        <Grid style={{ alignItems: 'center', ...spacing.pxFive,  ...spacing.ptFive }}>
          <Col style={{ width: '8%' }}>
            <FontAwesomeIcon icon={ faArrowCircleLeft } size={ 20 } /> 
          </Col>
          <Col>
            <Text style={{ ...font.fsFive, ...font.fStyleBold }}>
              Sign Up
            </Text>
          </Col>
        </Grid>
        <Grid>
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
          <Row style={{ ...spacing.pxFive, ...spacing.ptFive }}>
            <Item floatingLabel style={{ width: '100%' }}>
                <Label>Confirm Password</Label>
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
                Sign UP
              </Text>
            </Button>
          </Row>
          <Row style={{ justifyContent: 'center', ...spacing.ptFive }}>
            <Text>
              Already have accoung? Login
            </Text>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default Register;