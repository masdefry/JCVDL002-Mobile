import React, { useState } from 'react';
import axios from 'axios';
import {Button, Col, Container, Content, Grid, Input, Item, Label, Row, Text} from 'native-base';
import { urlAPI } from '../../Supports/Constants/urlAPI';

// Utilities
import color from './../../Supports/Styles/Color'
import spacing from './../../Supports/Styles/Spacing'
import font from './../../Supports/Styles/Font'
import MainRouter from '../../../routes/MainRouter';

const Login = ({ navigation }) => {

  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const [isLogin, setIsLogin] = useState(false)

  const onFillData = (val, dataType) => {
    if(dataType === 'email'){
      setData({...data, email: val}) // setData({password: 'existData', email: newVal})
    }
    if(dataType === 'password'){
      setData({...data, password: val}) // setData({email: 'existData', password: newVal})
    }
  }

  const onSubmitData = () => {
    axios.get(urlAPI + '/users', {params: {...data}})
    .then((res) => {
      if(res.data.length === 1){
        setIsLogin(true)
      }else{
        setMessage('Email / Password Tidak Ditemukan')
      }
    })
    .catch((err) => {
      console.log(err)
      setMessage(err)
    })
  }

  if(isLogin){
    return(
      <MainRouter />
    )
  }

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
              <Input onChangeText={ (val) => onFillData(val, 'email') } style={{ width: '100%' }} />
            </Item>
          </Row>
          <Row style={{ ...spacing.mtFive }}>
            <Item floatingLabel style={{ width: '100%' }}>
              <Label>Password</Label>
              <Input onChangeText={ (val) => onFillData(val, 'password') } style={{ width: '100%' }} />
            </Item>
          </Row>
          <Row style={{ justifyContent: 'flex-end', ...spacing.mtThree }}>
            <Text style={{ color: 'blue', ...font.fStyleBold }}>
              Forgot Password
            </Text>
          </Row>
          <Row>
            <Text style={{ color: 'red' }}>
              {
                message?
                  message
                :
                  null
              }
            </Text>
          </Row>
          <Row>
            <Button onPress={() => onSubmitData()} rounded block danger style={{ width: '100%', ...spacing.mtFive }}>
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