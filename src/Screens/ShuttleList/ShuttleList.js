import { Button, Col, Container, Content, Grid, Header, Left, Row, Text, Icon, Title, Right, Body } from 'native-base';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDotCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react/cjs/react.development';

// Utilities
import Spacing from './../../Supports/Styles/Spacing'
import Color from './../../Supports/Styles/Color'
import Font from './../../Supports/Styles/Font'
import axios from 'axios';

const ShuttleList = ({ navigation: {navigate}, route }) => {
    
    const [dataSearch, setDataSearch] = useState(null)
    const [dataShuttles, setDataShuttles] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        onGetShuttle()
        setDataSearch({...route.params})
    }, [])

    const onGetShuttle = () => {
        axios.get('http://10.0.2.2:3000/shuttles', {params: {from: route.params.from, to: route.params.to} })
        .then((res) =>{
            if(res.data.length > 0){
                setDataShuttles(res.data)
                setIsLoading(false)
            }else{
                setIsLoading(false)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    if(isLoading){
        return(
            <Container>
                <Content>
                    <Grid style={{ height: 300 }}>
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
                    <Title>{dataSearch? dataSearch.from : null} to {dataSearch? dataSearch.to : null}</Title>
                </Body>
                <Right>
                    <Button transparent>
                    <Text>Cancel</Text>
                    </Button>
                </Right>
            </Header>
            <Content>
                {
                    dataShuttles?
                        dataShuttles.map((val, index) => {
                            return(
                                <Grid onPress={() => navigate('ShuttleDetail', {id: val.id, date: dataSearch.date})} key={index} style={{ ...Spacing.pxFive, ...Spacing.pyFive, borderBottomWidth: 1, borderColor: 'gray' }}>
                                    <Row>
                                        <Col>
                                            <Text style={{ ...Font.fsFour }}>
                                                09:00 - 21:00
                                            </Text>
                                        </Col>
                                        <Col>
                                            <Text style={{ textAlign: 'right', ...Font.fsFour, ...Font.fStyleBold }}>
                                                Rp {val.price}
                                            </Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ width: '33%' }}>
                                            <Text style={{ ...Font.fsThree }}>
                                                9 Jam 10 Menit 
                                            </Text>
                                        </Col>
                                        <Col style={{ width: '3%', justifyContent: 'center' }}>
                                            <Text style={{ ...Font.fsThree }}>
                                                <FontAwesomeIcon icon={faDotCircle} size={3} />
                                            </Text>
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
                                            <Text style={{ width: '30%', borderRadius: 3, textAlign: 'center', ...Color.bgSuccess, ...Color.light }}>
                                                <FontAwesomeIcon icon={faStar} size={12} style={{ color: 'white', ...Spacing.mlTwo }} /> 4.7
                                            </Text>
                                        </Col>
                                    </Row>
                                    <Row style={{ ...Spacing.mtThree }}>
                                        <Text style={{ ...Font.fsFour }}>
                                            {val.from}
                                        </Text>
                                    </Row>
                                </Grid>
                            )
                        })
                    :
                        <Grid style={{ height: 300 }}>
                            <Row>
                                <Text>
                                    Data Tidak Ditemukan
                                </Text>
                            </Row>
                        </Grid>
                }
            </Content>
        </Container>
    )
}

export default ShuttleList