import { Body, Button, Card, Col, Container, Content, Grid, Header, Left, Right, Row, Spinner, Text, Title } from 'native-base'
import {Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import {TouchableOpacity} from 'react-native-gesture-handler'
import axios from 'axios'

// Styles
import Color from './../../Supports/Styles/Color'
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Font'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'

const ShuttleDetail = ({navigation: {navigate}, route}) => {

    const [dataShuttle, setDataShuttle] = useState(null)
    const [dataFacility, setDataFacility] = useState(null)
    const [dataSeatBooked, setDataSeatBooked] = useState([])

    useEffect(() => {
        console.log(route.params.id)
        console.log(route.params.date)
        onGetShuttle()
        onGetFacility()
        onGetSeatBooked()
    }, [])

    const onGetShuttle = () => {
        axios.get('http://10.0.2.2:3000/shuttles', {params: {id: route.params.id}})
        .then((res) => {
            setDataShuttle(res.data)
            // console.log(res.data)
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
        axios.get('http://10.0.2.2:3000/transactions', {params: {idShuttle: route.params.id, departureDate: route.params.date}})
        .then((res) => {
            if(res.data){
                let data = res.data
                let seatBooked = []

                for(let i=0; i < data.length; i++){ // Looping Luar ---> Looping 1
                    let detailPassenger = data[i].detailPassenger

                    for(let j=0; j < detailPassenger.length; j++){ // Looping Dalam
                        seatBooked.push(detailPassenger[j].seat)
                    }
                }

                setDataSeatBooked([...seatBooked]) // 1A, 2A
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

        if(dataShuttle === null || dataFacility === null){
            return(
                <Container>
                    <Content>
                        <Grid>
                            <Row>
                                <Text>
                                    Loading...
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
                        <Icon1 name='arrow-back-circle-outline' onPress={() => navigate('ShuttleList')} style={{...Font.fsEight, ...Color.light}} />
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
                            <Image source={{uri: dataShuttle[0].image2}} style={{ width: '100%', height: 100 }} />
                        </Col>
                        <Col>
                            <Image source={{uri: dataShuttle[0].image3}} style={{ width: '100%', height: 100 }} />
                        </Col>
                    </Grid>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                        <Col>
                            <Text style={{...Font.fsSix, fontWeight: 'bold'}}>
                                {dataShuttle[0].name}
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
                                {dataShuttle[0].class}
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
                                                <Col key={index}>
                                                    {/* <Image source={{require: './../Supports/Images/toilet.png'}} style={{ width: '100%', height: 20 }} /> */}
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
                                id: 1,
                                name: 'Jackal,
                                from: 'Bandung,
                                to: 'Tangerang,
                                facitility: [1]
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
                        <Row>
                            <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                                Seat
                            </Text>
                        </Row>
                    </Grid>
                    <Grid style={{...Spacing.pxEight, ...Spacing.pyFive, ...Spacing.mtTwo, ...Spacing.mxFive, flexWrap: 'wrap', borderWidth: 1, borderColor: 'black', borderRadius: 3}}>
                        {
                            dataShuttle[0].seat.map((val, index) => {
                                return(
                                    <>
                                        {
                                            dataSeatBooked.includes(val)?
                                                <Col style={{width: '25%', alignItems: 'center', ...Spacing.mbTwo}}>
                                                    
                                                    <Icon1 name='person' style={{fontSize: 25}} />
                                                    <Text>
                                                        {val}
                                                    </Text>
                                                </Col>
                                            :
                                                <Col style={{width: '25%', alignItems: 'center', ...Spacing.mbTwo}}>
                                                    <TouchableOpacity>
                                                        <Icon1 name='person-outline' style={{fontSize: 25}} />
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
                </Content>
            </Container>
        )

}

export default ShuttleDetail