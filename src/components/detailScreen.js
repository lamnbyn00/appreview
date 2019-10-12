import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,

}from 'react-native'
import api from '../components/api'
let  rootImage = 'https://image.tmdb.org/t/p/w500';
import type from '../styles/style'
export default class detailScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        api.view(this.props.navigation.state.params.movieId)
            .then((data)=>{this.setState(data)})
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{
                    flexDirection:"row",
                    height:50,
                    backgroundColor:'#8A0808',
                    // justifyContent:'center',
                    alignItems:'center'
                }}>
                    <TouchableOpacity onPress={() => navigate('screenOne')}>
                        <Text  style={{color:'white'}}> back </Text>
                    </TouchableOpacity>
                    <Text style={{color:'white', fontWeight: 'bold',marginLeft:100}}>Movie Detail</Text>
                </View>
                <View style={{flex:10,flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Image source={{uri: rootImage + this.state.poster_path}} style={type.hinhanh2}/>
                    </View>
                    <View style={{flex:2,marginTop:3}}>
                        <Text style={type.text2}>{this.state.original_title}</Text>
                        <Text style={type.text2}>({this.state.release_date})</Text>
                        <Text style={type.text3}>Vote Rated: {this.state.vote_average} (Voted: {this.state.vote_count})</Text>
                        <Text style={type.text3}>Popularity: {this.state.popularity}</Text>
                        <Text style={type.text3}>Runtime: {this.state.runtime}</Text>
                        <Text style={type.text3}>Overview: {this.state.overview}</Text>
                    </View>
                </View>
                {/*<Image source={{uri: rootImage + this.state.poster_path}} style={type.hinhanh}/>*/}
            </View>
        );
    }
}

//chua custom duoc header nam chinh giua.