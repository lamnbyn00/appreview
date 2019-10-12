import React,{Component} from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    TextInput,
}from 'react-native'
let  rootImage = 'https://image.tmdb.org/t/p/w500'
import type from '../styles/style'
import api from '../components/api'
export default class listScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mangData:[],
            key:'',
        };
        api.search('batman')
            .then((data)=>{this.setState({mangData:data})});
         //this.Go =this.Go.bind(this);
    }

    Go(text){
        if(text.length == 0)
        {
            alert("no information!!!")
        }else{
            api.search(text)
                .then((data)=>{this.setState({mangData:data})})
        }
    }
    Header =()=>{
        return(
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:8}}>
                    <TextInput style={type.text}
                               placeholder={'Search'}
                               placeholderTextColor="red"
                               underlineColorAndroid={'transparent'}
                               onChangeText={ key => this.setState({ key })}
                    />
                </View>
                <View style={{flex:1,alignItems:'center',
                }}>
                    <TouchableOpacity onPress={()=>this.Go(this.state.key)}>
                        <Text style={type.text}>Go</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={{backgroundColor:'white'}}>
                <FlatList style={{marginBottom:0}}
                          data={this.state.mangData}
                          renderItem={({item})=>
                              <TouchableOpacity onPress={()=>navigate('screenTwo',{movieId:item.id})}>
                                  <View style={type.dong}>
                                      <Text style={{color:'black' ,paddingTop:20,fontWeight:'bold',fontSize:10}}>{item.title}</Text>
                                      <Text style={{color:'black' ,fontSize:10}}>({item.release_date})</Text>
                                      <Image source={{uri: rootImage + item.poster_path}} style={type.hinhanh}/>
                                  </View>
                              </TouchableOpacity>
                          }
                          keyExtractor={(item, index) => index}
                          ListHeaderComponent={this.Header}
                />
            </View>
        );
    }
}

//bi loi cuoi cung cat hinh