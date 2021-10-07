import { Body, Button, Container, Content, Grid, Header, Input, Item, Label, Left, Row, Text } from 'native-base'
import React, {useEffect, useState} from 'react'

// Styles
import Color from './../../Supports/Styles/Color'
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Font'

// Icon
import Icon1 from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const BookingDetail = ({navigation: {navigate}, route}) => {

    const [formData, setFormData] = useState(null)
    const [dataUser, setDataUser] = useState(null)

    useEffect(( ) => {
        console.log(route.params)
        onCreateForm()
        onGetIdUser()
    }, [])

    const onCreateForm = () => {
        let selectedSeat = route.params.dataSelectedSeat // [1A, 1B]
        let form = []

        for(let i=0; i < selectedSeat.length; i++){
            form.push({
                seat: selectedSeat[i],
                name: '',
                umur: null
            })
        }

        setFormData(form)
    }

    const onGetIdUser = () => {
        AsyncStorage.getItem('@idUser')
        .then((res) => {
        if(res){
            console.log(res)
            axios.get('http://10.0.2.2:3000/users', {params: {id: res}})
            .then((res) => {
                setDataUser({
                    id: res.data[0].id,
                    email: res.data[0].email
                })
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

    const onFillData = (value, dataType, seat) => {
        console.log('Triggered')
        // [
        //     {
        //         seat: '1A',
        //         name: '',
        //         umur: null
        //     },
        //     {
        //         seat: '1B',
        //         name: '',
        //         umur: null
        //     }
        // ]

        // Step0. Kita ambil semua data yg ada di dalam state formData
        let currentFormData = formData

        // Step1. Kita cari nomor index dari nomor seat 
        let indexSeat = null

        for(let i=0; i < currentFormData.length; i++){
            if(currentFormData[i].seat === seat){
                indexSeat = i
            }
        }

        if(dataType === 'name'){
            currentFormData[indexSeat].name = value 
        }else{
            currentFormData[indexSeat].umur = value
        }

        console.log(currentFormData)
    }

    const onSubmit = () => {
        console.log(dataUser)
        console.log(route.params)

        let dataToSend = {
            idShuttle: route.params.idShuttle,
            status: "Paid",
            idUser: dataUser.id,
            name: route.params.name,
            class: route.params.class,
            from: route.params.from,
            to: route.params.to,
            departureDate: route.params.departureDate,
            detailPassenger: formData,
            totalPrice: route.params.totalPrice
        }

        axios.post('http://10.0.2.2:3000/transactions', {...dataToSend})
        .then((res) => {
            console.log('Success')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <Container>
            <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                <Left>
                    <Icon1 name='arrow-back-circle-outline' style={{...Font.fsEight, ...Color.light}} />
                </Left>
                <Body>
                    <Text style={{...Font.fsFive, ...Color.light, ...Spacing.mlFive, fontWeight: 'bold'}}>
                        Booking Detail
                    </Text>
                </Body>
            </Header>
            <Content>
                <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                    <Row>
                        <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                            Informasi Kontak
                        </Text>
                    </Row>
                    <Row style={{...Spacing.mtThree}}>
                        <Item stackedLabel style={{width: '100%'}}>
                            <Label>Email</Label>
                            <Input value={dataUser? dataUser.email : null} style={{width: '100%'}} disabled />
                        </Item>
                    </Row>
                    <Row style={{...Spacing.mtThree}}>
                        <Item stackedLabel style={{width: '100%'}}>
                            <Label>Phone Number</Label>
                            <Input style={{width: '100%'}} />
                        </Item>
                    </Row>
                </Grid>
                <Grid style={{...Spacing.pxFive, ...Spacing.mtSeven}}>
                    <Row>
                        <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                            Informasi Penumpang
                        </Text>
                    </Row>
                </Grid>
                {
                    formData?
                        formData.map((val, index) => {
                            return(
                                <Grid key={index} style={{...Spacing.pxFive, ...Spacing.pyThree, ...Spacing.mxFive, ...Spacing.mbThree, ...Color.bgLight}}>
                                    <Row>
                                        <Text style={{textAlign: 'right', width: '100%', fontWeight: 'bold'}}>
                                            Seat : {val.seat}
                                        </Text>
                                    </Row>
                                    <Row style={{...Spacing.mtThree}}>
                                        <Item stackedLabel style={{width: '100%'}}>
                                            <Label>Nama</Label>
                                            <Input onChangeText={(value) => onFillData(value, 'name', val.seat)} style={{width: '100%'}} />
                                        </Item>
                                    </Row>
                                    <Row style={{...Spacing.mtThree}}>
                                        <Item stackedLabel style={{width: '100%'}}>
                                            <Label>Umur</Label>
                                            <Input onChangeText={(value) => onFillData(value, 'umur', val.seat)} style={{width: '100%'}} />
                                        </Item>
                                    </Row>
                                </Grid>
                            )
                        })
                    :
                        null
                }
                <Grid style={{...Spacing.pxFive, ...Spacing.myThree}}>
                    <Button onPress={onSubmit} style={{width: '100%', ...Color.bgPrimary}}>
                        <Text style={{...Font.fsThree, width: '100%', textAlign: 'center'}}>
                            Payment
                        </Text>
                    </Button>
                </Grid>
            </Content>
        </Container>
    )
}

export default BookingDetail