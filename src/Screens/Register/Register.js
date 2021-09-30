import React from 'react';
import {Button, Col, Container, Content, Grid, Input, Item, Label, Row, Text} from 'native-base';
import axios from 'axios';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


// Utilities
import color from './../../Supports/Styles/Color'
import spacing from './../../Supports/Styles/Spacing'
import font from './../../Supports/Styles/Font'
import { useState } from 'react/cjs/react.development';

// Function
import EmailValidator from './../../Supports/Functions/EmailValidator'

const Register = () => {

  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState('')

  const onFillData = (val, dataType) => {
    if(dataType === 'email'){
      setData({...data, email: val})
    }

    if(dataType === 'password'){
      setData({...data, password: val})
    }
    
    if(dataType === 'confirmPassword'){
      setData({...data, confirmPassword: val})
    }
  }

  const onSubmitData = () => {
    // Validasi Email
    let emailValidatorResult = EmailValidator(data.email)
    if(emailValidatorResult === false) return setError('Email Tidak Valid')

    // Validasi Password
    let number = '0123456789'
    let character = '!@#$%'

    if(data.password !== data.confirmPassword) return setError('Password & Confirm Password Tidak Sesuai')
    if(data.password.length < 6) return setError('Password Minimal 6 Karakter')

    let isNumber = 0 // 1 -> 2 -> 2
    let isCharacter = 0 // 0 -> 0 -> 1
    for(let i=0; i < data.password.length; i++){
      if(number.includes(data.password[i])) isNumber++
      if(character.includes(data.password[i])) isCharacter++
    }

    if(isNumber === 0 || isCharacter === 0) return setError('Password Harus Mengandung Angka & Special Character')
    
    axios.get('http://10.0.2.2:3000/users', {params: {email: data.email}})
    .then((res) => {
      if(res.data.length === 1){
        setError('Email Sudah Terdaftar')
      }else{
        axios.post('http://10.0.2.2:3000/users', {email: data.email, password: data.password})
        .then((res) => {
          setError('Register Success')
        })
        .catch((err) => {
          console.log(err)
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <Container>
      <Content>
        <Grid style={{ ...spacing.pxFive, ...spacing.pyFive }}>
          <Col style={{ width: '8%', justifyContent: 'center' }}>
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </Col>
          <Col>
            <Text style={{ ...font.fsFive, ...font.fStyleBold }}>
              Sign Up
            </Text>
          </Col>
        </Grid>
        <Grid style={{ ...spacing.pxFive, ...spacing.pyFive }}>
          <Row style={{ ...spacing.mtFive }}>
            <Text style={{ ...font.fsEight, ...font.fStyleBold }}>
              Welcome!
            </Text>
          </Row>
          <Row>
            <Text>
              Fill your data to complete registration!
            </Text>
          </Row>
          <Row style={{ ...spacing.mtEight }}>
            <Item floatingLabel style={{ width: '100%' }}>
              <Label>Email</Label>
              <Input onChangeText={(val) => onFillData(val, 'email')} style={{ width: '100%' }} />
            </Item>
          </Row>
          <Row style={{ ...spacing.mtFive }}>
            <Item floatingLabel style={{ width: '100%' }}>
              <Label>Password</Label>
              <Input onChangeText={(val) => onFillData(val, 'password')} style={{ width: '100%' }} />
            </Item>
          </Row>
          <Row style={{ ...spacing.mtFive }}>
            <Item floatingLabel style={{ width: '100%' }}>
              <Label>Confirm Password</Label>
              <Input onChangeText={(val) => onFillData(val, 'confirmPassword')} style={{ width: '100%' }} />
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
                error?
                  error
                :
                  null
              }
            </Text>
          </Row>
          <Row>
            <Button onPress={() => onSubmitData()} rounded block danger style={{ width: '100%', ...spacing.mtFive }}>
              <Text>Sign Up</Text>
            </Button>
          </Row>
          <Row style={{ justifyContent: 'center', ...spacing.mtEight }}>
            <Text>
              Already have account? Sign In
            </Text>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default Register;

// Tugas Hari Ini:
// 1. Koneksikan Screen Register dengan Screen Login
// 2. Buat function untuk memvalidasi email. masdefrygmail.com X || masdefry@gmailcom X || masdefry@gmail.com || ryan@telkomuniversity.ac.id
// 3. Buat function untuk memvalidasi password & confirm password (minimal 6 karakter, include number & special karakter)
//    abcdef X || abc3def X || abc3d# || abc4# X
// 4. Submit data, apabila terjadi error tampilkan error nya. Ketika success, tampilkan message success