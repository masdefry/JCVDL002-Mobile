import { Body, Button, Card, Col, Container, Content, Grid, Header, Left, Right, Row, Spinner, Text, Title } from 'native-base'
import {Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {TouchableOpacity} from 'react-native-gesture-handler'

// Styles
import Color from './../../Supports/Styles/Color'
import Spacing from './../../Supports/Styles/Spacing'
import Font from './../../Supports/Styles/Font'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'

const ShuttleDetail = () => {
        return(
            <Container>
                <Header style={{alignItems: 'center', ...Color.bgPrimary}}>
                    <Left>
                        <Icon1 name='arrow-back-circle-outline' onPress={() => navigation.goBack()} style={{...Font.fsEight, ...Color.light}} />
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
                            
                        </Row>
                    </Grid>
                    <Grid>
                        <Col>
                            
                        </Col>
                        <Col>
                            
                        </Col>
                    </Grid>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                        <Col>
                            <Text style={{...Font.fsSix, fontWeight: 'bold'}}>
                                Pahala Kencana
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
                                Executive
                            </Text>
                        </Row>
                        <Row>
                            <Text style={{...Font.fsFive, ...Spacing.mtThree, fontWeight: 'bold'}}>
                                Rp. 290.000
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
                                    Bandung
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
                                    Surabaya
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
                        <Col>
                            <Text>
                                Facility A
                            </Text>
                        </Col>
                    </Grid>
                    <Grid style={{...Spacing.pxFive, ...Spacing.mtFive}}>
                        <Row>
                            <Text style={{...Font.fsFive, fontWeight: 'bold'}}>
                                Seat
                            </Text>
                        </Row>
                    </Grid>
                    <Grid style={{...Spacing.pxEight, ...Spacing.pyFive, ...Spacing.mtTwo, ...Spacing.mxFive, flexWrap: 'wrap', borderWidth: 1, borderColor: 'black', borderRadius: 3}}>
                        <Col style={{width: '25%', alignItems: 'center', ...Spacing.mbTwo}}>
                            <TouchableOpacity onPress={() => onSelectSeat(value)}>
                                <Icon1 name='person-outline' style={{fontSize: 25}} />
                                <Text>
                                    1
                                </Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={{width: '25%', alignItems: 'center', ...Spacing.mbTwo}}>
                            <TouchableOpacity onPress={() => onSelectSeat(value)}>
                                <Icon1 name='person' style={{fontSize: 25}} />
                                <Text>
                                    2
                                </Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={{width: '25%', alignItems: 'center', ...Spacing.mbTwo}}>
                            <TouchableOpacity onPress={() => onSelectSeat(value)}>
                                <Icon1 name='person' style={{fontSize: 25}} />
                                <Text>
                                    3
                                </Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={{width: '25%', alignItems: 'center', ...Spacing.mbTwo}}>
                            <TouchableOpacity onPress={() => onSelectSeat(value)}>
                                <Icon1 name='person' style={{fontSize: 25}} />
                                <Text>
                                    4
                                </Text>
                            </TouchableOpacity>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        )

}

export default ShuttleDetail