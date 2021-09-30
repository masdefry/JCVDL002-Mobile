import React, {useState} from 'react'
import { Button, Content, Grid, Input, Item, Container, Header, Body, Row, Text, Card, CardItem} from 'native-base'
import DatePicker from 'react-native-datepicker'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome' 

// Styles
import color from './../../Supports/Styles/Color'
import spacing from './../../Supports/Styles/Spacing'
import font from './../../Supports/Styles/Font'

const Home = ({navigation: {navigate}}) => {
    
    const [error, setError] = useState('')
    const [data, setData] = useState({
        from: '',
        to: '',
        totalSeat: 0,
        date: ''
    })

    const onFillData = (val, dataType) => {
        if(dataType === 'from') return setData({...data, from: val})
        if(dataType === 'to') return setData({...data, to: val})
        if(dataType === 'totalSeat'){
            if(val > 3) return setError('Total Seat Maksimal 3')
            return setData({...data, totalSeat: val}), setError('')
        }
        if(dataType === 'date') return setData({...data, date: val})
    }

    const onSubmitData = () => {
        navigate('ShuttleList', {data})
    }

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
                                        <Input onChangeText={(val) => onFillData(val, 'from')} placeholder='Berangkat Dari' style={{paddingVertical: 0, fontSize: 15}} />
                                    </Item>
                                </Row>
                                <Row style={{width: '100%', ...spacing.ptOne, ...spacing.pbZero}}>
                                    <Item style={{width: '100%'}}>
                                        <Icon name='map-marker' style={{...spacing.pxThree, ...spacing.pyZero, ...font.fsFive, ...color.secondary}} />
                                        <Input onChangeText={(val) => onFillData(val, 'to')} placeholder='Tujuan' style={{paddingVertical: 0, fontSize: 15}} />
                                    </Item>
                                </Row>
                                <Row style={{width: '100%', ...spacing.ptOne, ...spacing.pbZero}}>
                                    <Item style={{width: '100%'}}>
                                        <Icon name='bus' style={{...spacing.pxThree, ...spacing.pyZero, ...font.fsFive, ...color.secondary}} />
                                        <Input onChangeText={(val) => onFillData(val, 'totalSeat')} placeholder='Jumlah Kursi (Max 3)' style={{paddingVertical: 0, fontSize: 15}} />
                                    </Item>
                                </Row>
                                <Row style={{width: '100%', ...spacing.ptOne, ...spacing.pbSix}}>
                                    <Item style={{width: '100%'}}>
                                        <Icon name='calendar' style={{...spacing.pxThree, ...spacing.pyZero, ...font.fsFive, ...color.secondary}} />
                                        <DatePicker
                                            placeholder='Select Date'
                                            style={{width: 200, marginTop: 10}}
                                            date={data.date}
                                            minDate={new Date()}
                                            mode="date"
                                            format="DD-MM-YYYY"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            onDateChange={(date) => onFillData(date, 'date')}
                                            showIcon={false}

                                            customStyles={{
                                                dateInput: {
                                                    fontSize: 20,
                                                    marginLeft: -115,
                                                    marginTop: -10,
                                                    borderWidth: 0
                                                }
                                            }}
                                        />
                                    </Item>
                                </Row>
                            </Body>
                        </CardItem>
                    </Card>
                </Grid>
                <Grid style={{alignSelf: 'center', ...spacing.pxThree, ...spacing.pyZero}}>
                    <Row style={{...spacing.pxZero, ...spacing.pyFive}}>
                        <Button onPress={() => onSubmitData()} style={{width: '100%', borderRadius: 3, ...color.bgPrimary}} block>
                            <Text style={{width: '100%', textAlign: 'center', ...font.fsThree, ...font.fStyleLight, ...color.light}}>
                                Search
                            </Text>
                        </Button>
                    </Row>
                    <Row style={{justifyContent: 'center'}}>
                        <Text style={{...color.primary, fontStyle: 'italic'}}>
                            {
                                error?
                                    error
                                :
                                    null
                            }
                        </Text>
                    </Row>
                </Grid>
            </Content>
        </Container>
    )
}

export default Home