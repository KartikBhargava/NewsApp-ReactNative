import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Item, View } from 'native-base';
import { getArticles } from '../../service/news';
import { Alert, ActivityIndicator } from 'react-native';
import  DataItem  from '../../components/dataItem';

export default class tab2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: null
        }
    }

    componentDidMount() {
        getArticles('business').then(data => {
            this.setState({
                isLoading: false,
                data: data
            })
        }, error => {
            Alert.alert('Error', 'Something Went Wrong');
        }
        )
    }

    render() {

        let view = this.state.isLoading ? (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
              <Text style={{marginTop: 10}} children="Please Wait.." />
            </View>
          ) : (
            <List
              dataArray={this.state.data}
              renderRow={(item) => {
                  return (
                    <DataItem data={item} />
                  )
              }} />
          )

        return (
            <Container>
                <Content>
                   {view}
                </Content>
            </Container>
        );
    }
}