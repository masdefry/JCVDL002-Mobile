import { Body, Button, Card, Col, Container, Content, Grid, Header, Left, Right, Row, Spinner, Text, Title } from 'native-base'
import React from 'react'
import axios from 'axios'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {Image} from 'react-native'


// Styles
import Color from './../../Supports/Styles/Color'
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Font'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import { useEffect, useState } from 'react/cjs/react.development'

const ShuttleDetail = ({route, navigation: {navigate}}) => {

    const [dataShuttle, setDataShuttle] = useState(null)
    const [dataFacility, setDataFacility] = useState(null)
    const [dataSeatBooked, setDataSeatBooked] = useState([])
    const [selectedSeat, setSelectedSeat] = useState([])
    const [error, setError] = useState('')

    useEffect(() =>{
        console.log(route.params)
        onGetShuttleDetail()
        onGetFacility()
        onGetSeatBooked()
    }, [])

    const onGetShuttleDetail = () => {
        axios.get('http://10.0.2.2:3000/shuttles', {params: {id: route.params.id}})
        .then((res) => {
            setDataShuttle(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onGetFacility = () => {
        axios.get('http://10.0.2.2:3000/facility')
        .then((res) => {
            setDataFacility(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onGetSeatBooked = () => {
        axios.get('http://10.0.2.2:3000/transactions', {params: {idShuttle: 4, departureDate: '04-10-2021'}})
        .then((res) => {
            let seatBooked = []
            for(let i=0; i < res.data.length; i++){ // Looping di dalam data transaction
                let detailPassenger = res.data[i].detailPassenger // Setiap kali looping, kita ambil detailPassenger

                for(let j=0; j < detailPassenger.length; j++){ // Lakukan looping di dalam detailPassenger untuk mendapotkan nomor seat yg sudah di booking
                    seatBooked.push(detailPassenger[i].seat)
                }
            }

            console.log(seatBooked)
            setDataSeatBooked([...seatBooked])
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onSelectSeat = (seat) => {
        // Ambil dulu data seat dari selectedSeat
        console.log(seat)
        let currentSelectedSeat = [...selectedSeat] // [], [1B], [1B, 1C], [1B, 1C, 1D]

        // Kita cek, apakah nomor seat yg dipilih sudah ada di dalam state selectedSeat?
        let checkResult = currentSelectedSeat.includes(seat)
        if(checkResult === false){ // Ketika nomor seat belum ada di dalam state, maka user ingin melakukan select seat
            currentSelectedSeat.push(seat) // [1B] [1C] [1D] [2A]
    
            if(currentSelectedSeat.length <= route.params.totalSeat){
                setSelectedSeat(currentSelectedSeat)
            }else{
                setError(`Total Seat Maksimum ${route.params.totalSeat}`)
            }
        }else{ // Ketika nomor seat belum ada di dalam state, maka user ingin melakukan unselect seat
            let indexSeat = currentSelectedSeat.indexOf(seat)
            
            currentSelectedSeat.splice(indexSeat, 1)

            
            if(currentSelectedSeat.length <= route.params.totalSeat){
                setSelectedSeat(currentSelectedSeat)
                setError('')
            }
        }

    }

    const onSubmit = () => {
        console.log(selectedSeat)
    }

        if(dataShuttle === null || dataFacility === null){
            return(
                <Container>
                    <Content>
                        <Grid>
                            <Row>
                                <Text>
                                    Loading
                                </Text>
                            </Row>
                        </Grid>
                    </Content>
                </Container>
            )
        }

        return(
            <Container>
                <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                    <Left>
                        <Icon1 onPress={() => navigate('ShuttleList')} name='arrow-back-circle-outline' style={{...Font.fsEight, ...Color.light}} />
                    </Left>
                    <Body>
                        <Text style={{...Font.fsFive, ...Color.light, ...Spacing.mlFive, fontWeight: 'bold'}}>
                            Shuttle Detail
                        </Text>
                    </Body>
                </Header>
                <Content>
                    <Grid>
                        <Row>
                            <Image source={{uri: dataShuttle[0].image1}} style={{ width: '100%', height: 200 }} />
                        </Row>
                    </Grid>
                    <Grid>
                        <Col>
                            <Image source={{uri: dataShuttle[0].image2}} style={{ width: '100%', height: 150 }} />
                        </Col>
                        <Col>
                            <Image source={{uri: dataShuttle[0].image3}} style={{ width: '100%', height: 150 }} />
                        </Col>
                    </Grid>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                        <Col>
                            <Text style={{...Font.fsSix, fontWeight: 'bold'}}>
                                {
                                    dataShuttle[0].name
                                }
                            </Text>
                        </Col>
                        <Col style={{width: '12%'}}>
                            <Text style={{textAlign: 'right', paddingVertical: 3, textAlign: 'center', borderRadius: 3, ...Color.bgSuccess, ...Color.light}}>
                                <Icon name='star' /> 5
                            </Text>
                        </Col>
                    </Grid>
                    <Grid style={{...Spacing.pxFive}}>
                        <Row>
                            <Text>
                                {
                                    dataShuttle[0].class
                                }
                            </Text>
                        </Row>
                        <Row>
                            <Text style={{...Font.fsFive, ...Spacing.mtThree, fontWeight: 'bold'}}>
                                Rp. {dataShuttle[0].price}
                            </Text>
                        </Row>
                    </Grid>
                    <Card style={{...Spacing.mlFive, ...Spacing.mrFive, ...Spacing.mtFive}}>
                        <Grid style={{...Spacing.pxFive, ...Spacing.myThree}}>
                            <Col>
                                <Text style={{...Font.fsThree}}>
                                    Dari : 
                                </Text>
                                <Text style={{...Font.fsFive}}>
                                    {dataShuttle[0].from}
                                </Text>
                            </Col>
                            <Col>
                                <Text style={{textAlign: 'center', ...Font.fsFive}}>
                                    -
                                </Text>
                            </Col>
                            <Col>
                                <Text style={{...Font.fsThree}}>
                                    Tujuan : 
                                </Text>
                                <Text style={{...Font.fsFive}}>
                                    {dataShuttle[0].to}
                                </Text>
                            </Col>
                        </Grid>
                    </Card>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                        <Row>
                            <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                                Facility
                            </Text>
                        </Row>
                    </Grid>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtTwo}}>
                        {
                            dataFacility.map((val, index) => {
                                return(
                                    <>
                                        {
                                            dataShuttle[0].facility.includes(val.id)?
                                                <Col key={val}>
                                                    <Text>
                                                        {val.facility}
                                                    </Text>
                                                </Col>
                                            :
                                                null
                                        }
                                    </>
                                )
                            })
                        }

                        {/* 
                            dataShuttle = [{
                                id: ...,
                                name: ...,
                                class: ...,
                                ...
                                facility: [1, 2, 3, 4, 5]
                            }]

                            dataFacility = [
                                {id: 1, facility: ac},
                                {id: 2, facility: toilet},
                                {id: 3, facility: seat},
                                {id: 4, facility: snack},
                                {id: 5, facility: storage},
                            ]
                        */}
                    </Grid>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                        <Col>
                            <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                                Seat
                            </Text>
                        </Col>
                        <Col>
                            {
                                error?
                                    <Text style={{ color: 'red' }}>
                                        {error}
                                    </Text>
                                :
                                    null
                            }
                        </Col>
                    </Grid>
                    <Grid style={{...Spacing.pxEight, ...Spacing.pyFive, ...Spacing.mtTwo, ...Spacing.mxFive, flexWrap: 'wrap', borderWidth: 1, borderColor: 'black', borderRadius: 3}}>
                        {
                            dataShuttle[0].seat.map((val, index) => {
                                return(
                                    <>
                                        {
                                            dataSeatBooked.includes(val)?
                                                <Col key={index} style={{width: '25%', alignItems: 'center', ...Spacing.mbTwo}}>
                                                    
                                                        <Icon1 name='person' style={{fontSize: 25}} />
                                                        <Text>
                                                            Booked
                                                        </Text>
                                                </Col>
                                            :
                                                <Col key={index} style={{width: '25%', alignItems: 'center', ...Spacing.mbTwo}}>
                                                    <TouchableOpacity onPress={() => onSelectSeat(val)}>
                                                        <Icon1 name={selectedSeat.includes(val)? 'person' : 'person-outline'} style={{fontSize: 25}} />
                                                        <Text>
                                                            {val}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </Col>
                                        }   
                                    </>
                                )
                            })
                        }
                    </Grid>
                    <Grid style={{...Spacing.pxFive, ...Spacing.myFive}}>
                        <Row>
                            <Button onPress={onSubmit} style={{ width: '100%', justifyContent: 'center', ...Color.bgPrimary, borderRadius: 25 }}>
                                <Text>
                                    Submit
                                </Text>
                            </Button>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        )

}

export default ShuttleDetail