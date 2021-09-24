import React, {useState} from 'react'
import { Button, Content, Grid, Input, Item, Container, Header, Body, Row, Text, Card, CardItem} from 'native-base'
// import DatePicker from 'react-native-datepicker'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome' 

// Styles
import color from './../../Supports/Styles/Color'
import spacing from './../../Supports/Styles/Spacing'
import font from './../../Supports/Styles/Font'

const Home = () => {
    
    const [error, setError] = useState('')
    
    return(
        <Container>
            <Header style={{...color.bgPrimary}}>
                <Body style={{alignItems: 'center', width: '100%'}}>
                    <Text style={{...font.fsFive, ...color.light, fontStyle: 'italic', fontWeight: 'bold'}}>
                        MyBus Apps
                    </Text>
                </Body>
            </Header>
            <Content>
                <Grid style={{alignSelf: 'center', ...spacing.pxThree, ...spacing.pyZero, ...spacing.mtFive}}>
                    <Card style={{width: '98%', borderRadius: 3}}>
                        <CardItem>
                            <Body>
                                <Row style={{width: '100%', ...spacing.ptOne, ...spacing.pbZero}}>
                                    <Item style={{width: '100%'}}>
                                        <Icon name='map-marker' style={{...spacing.pxThree, ...spacing.pyZero, ...font.fsFive, ...color.secondary}} />
                                        <Input placeholder='Berangkat Dari' style={{paddingVertical: 0, fontSize: 15}} />
                                    </Item>
                                </Row>
                                <Row style={{width: '100%', ...spacing.ptOne, ...spacing.pbZero}}>
                                    <Item style={{width: '100%'}}>
                                        <Icon name='map-marker' style={{...spacing.pxThree, ...spacing.pyZero, ...font.fsFive, ...color.secondary}} />
                                        <Input placeholder='Tujuan' style={{paddingVertical: 0, fontSize: 15}} />
                                    </Item>
                                </Row>
                                <Row style={{width: '100%', ...spacing.ptOne, ...spacing.pbZero}}>
                                    <Item style={{width: '100%'}}>
                                        <Icon name='bus' style={{...spacing.pxThree, ...spacing.pyZero, ...font.fsFive, ...color.secondary}} />
                                        <Input placeholder='Jumlah Kursi (Max 3)' style={{paddingVertical: 0, fontSize: 15}} />
                                    </Item>
                                </Row>
                                <Row style={{width: '100%', ...spacing.ptOne, ...spacing.pbSix}}>
                                    <Item style={{width: '100%'}}>
                                        <Icon name='calendar' style={{...spacing.pxThree, ...spacing.pyZero, ...font.fsFive, ...color.secondary}} />
                                        {/* <DatePicker
                                            placeholder='Select Date'
                                            style={{width: 200, marginTop: 10}}
                                            date={filter.date}
                                            minDate={new Date()}
                                            mode="date"
                                            format="DD-MM-YYYY"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            onDateChange={(date) => onSetDate(date)}
                                            showIcon={false}

                                            customStyles={{
                                                dateInput: {
                                                    fontSize: 20,
                                                    marginLeft: -115,
                                                    marginTop: -10,
                                                    borderWidth: 0
                                                }
                                            }}
                                        /> */}
                                    </Item>
                                </Row>
                            </Body>
                        </CardItem>
                    </Card>
                </Grid>
                <Grid style={{alignSelf: 'center', ...spacing.pxThree, ...spacing.pyZero}}>
                    <Row style={{...spacing.pxZero, ...spacing.pyFive}}>
                        <Button style={{width: '100%', borderRadius: 3, ...color.bgPrimary}} block>
                            <Text style={{width: '100%', textAlign: 'center', ...font.fsThree, ...font.fStyleLight, ...color.light}}>
                                Search
                            </Text>
                        </Button>
                    </Row>
                    <Row style={{justifyContent: 'center'}}>
                        <Text style={{...color.primary, fontStyle: 'italic'}}>
                            Error Here
                        </Text>
                    </Row>
                </Grid>
            </Content>
        </Container>
    )
}

export default Home