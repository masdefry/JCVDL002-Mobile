import { Body, Col, Container, Content, Grid, Header, Left, Right, Row, Text, Button, Icon, Title } from 'native-base';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDotCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

// Utilities
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Font'
import Color from './../../Supports/Styles/Color'
import { useEffect, useState } from 'react/cjs/react.development';

const ShuttleList = ({navigation: {navigate}, route}) => {

    const [dataSearch, setDataSearch] = useState(null)
    const [dataShuttleList, setDataShuttleList] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
            
    useEffect(() => {
        setDataSearch({...route.params.data})
        onGetDataShuttle()
    }, [])
    
    const onGetDataShuttle = () => {
        axios.get('http://10.0.2.2:3000/shuttles', {params: {from: route.params.data.from, to: route.params.data.to}})
        .then((res) => {
           if(res.data.length !== 0){ // Ketika data ditemukan, set datanya ke dalam state DataShuttleList & kita set isLoading menjadi false
                setDataShuttleList(res.data)
                setIsLoading(false)
           }else{ // Ketika data tidak ditemukan, set isLoading berubah menjadi false
               setIsLoading(false)
           }
        })
        .catch((err) => {
            console.log('Error from .catch')
            console.log(err)
        })
    }

    if(isLoading){
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
            <Header style={{ ...Color.bgPrimary }}>
                <Left>
                    <Button transparent>
                    <Icon name='arrow-back' onPress={() => navigate('Home')} />
                    </Button>
                </Left>
                <Body>
                    <Title>
                    {
                        dataSearch?
                            `${dataSearch.from} to ${dataSearch.to}`    
                        :
                            null
                    }
                    </Title>
                </Body>
                <Right>
                    <Button transparent>
                    <Text>Cancel</Text>
                    </Button>
                </Right>
                </Header>
            <Content>
                {
                    dataShuttleList?
                        dataShuttleList.map((val, index) => {
                            return(
                                <Grid key={index} style={{ ...Spacing.pxFive, ...Spacing.pyFive, borderBottomWidth: 1, borderColor: 'gray' }}>
                                    <Row>
                                        <Col>
                                            <Text style={{ ...Font.fsFour }}>
                                                12:30 - 21:30
                                            </Text>
                                        </Col>
                                        <Col>
                                            <Text style={{ textAlign: 'right', ...Font.fsFour, ...Font.fStyleBold }}>
                                                Rp {val.price}
                                            </Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ width: '32%' }}>
                                            <Text style={{ ...Font.fsThree }}>
                                                9 Jam 00 Menit
                                            </Text>
                                        </Col>
                                        <Col style={{ width: '5%', alignSelf: 'center' }}>
                                            <FontAwesomeIcon icon={faDotCircle} size={5} />
                                        </Col>
                                        <Col>
                                            <Text style={{ ...Font.fsThree }}>
                                                {val.seat.length} Seat
                                            </Text>
                                        </Col>
                                    </Row>
                                    <Row style={{ ...Spacing.mtThree }}>
                                        <Col>
                                            <Text style={{ ...Font.fsFour, ...Font.fStyleBold }}>
                                                {val.name}
                                            </Text>
                                        </Col>
                                        <Col style={{ alignItems: 'flex-end' }}>
                                            <Text style={{ width: '30%', textAlign: 'center', borderRadius: 5, ...Color.bgSuccess, ...Font.fsFour, ...Font.fStyleBold, ...Color.light }}>
                                                <FontAwesomeIcon icon={faStar} size={12} style={{ color: 'white' }} /> 4.7
                                            </Text>
                                        </Col>
                                    </Row>
                                    <Row style={{ ...Spacing.mtThree }}>
                                        <Text>
                                            Terminal {val.from}
                                        </Text>
                                    </Row>
                                </Grid>
                            )
                        })
                    :
                        <Text style={{ marginTop: 300, textAlign: 'center'}}>
                            Pencarian Tidak Ditemukan
                        </Text>
                }
            </Content>
        </Container>
    )
}

export default ShuttleList

// Login
// Register
    // Home
        // ShuttleList
        // ShuttleDetail
    // Transaction
    // Profile

    // Splash Screen