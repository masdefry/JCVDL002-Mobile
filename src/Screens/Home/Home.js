import React from 'react';
import { Button, Card, Container, Content, Grid, Input, Item, Label, Row, Text } from 'native-base';

// Utilities
import color from './../../Supports/Styles/Color'
import spacing from './../../Supports/Styles/Spacing';
import font from './../../Supports/Styles/Font';

const Home = ({ navigation }) => {
  return (
    <Container>
      <Content style={{ ...spacing.pxThree, ...spacing.ptThree }}>
          <Card>
            <Grid style={{ ...spacing.pxFive }}>
                <Row>
                    <Item inlineLabel style={{ width: '100%' }}>
                        <Label>From: </Label>
                        <Input style={{ width: '100%' }} />
                    </Item>
                </Row>
                <Row>
                    <Item inlineLabel style={{ width: '100%' }}>
                        <Label>To:</Label>
                        <Input style={{ width: '100%' }} />
                    </Item>
                </Row>
                <Row>
                    <Item inlineLabel style={{ width: '100%' }}>
                        <Label>Date:</Label>
                        <Input style={{ width: '100%' }} />
                    </Item>
                </Row>
                <Row>
                    <Item inlineLabel style={{ width: '100%' }}>
                        <Label>Seat (Max. 3):</Label>
                        <Input style={{ width: '100%' }} />
                    </Item>
                </Row>
                <Row style={{ ...spacing.pyFive }}>
                    <Button rounded danger style={{ width: '100%' }}>
                        <Text style={{ width: '100%', textAlign: 'center' }}>Search</Text>
                    </Button>
                </Row>
            </Grid>
          </Card>
      </Content>
    </Container>
  );
};

export default Home;