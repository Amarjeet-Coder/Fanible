import { View,Text, Dimensions, Image, } from "react-native";
const {width,height}=Dimensions.get('screen')
 export default function LeaderBoard(){
    return(
    <View style={{backgroundColor:'black',width:width*1,height:height*1}}>
            <View style={{width:width*1,height:height*0.4,backgroundColor:'#1e90ff',borderBottomLeftRadius:27,borderBottomRightRadius:27}}>
            {/*heading*/ /*<View style={{width:width*0.12,height:height*0.05,borderRadius:50,backgroundColor:'white'}}></View>*/}
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'white',marginTop:30,marginLeft:60}}>Leaderboard</Text>
            <View style={{width:width*0.12,height:height*0.0,borderRadius:50,backgroundColor:'white',top:30,marginRight:22}}><Image source={require('../../Assests/esha.jpg')} style={{width:48,height:48,borderRadius:50}}/></View>
            
            </View>
            {/*heading*/}
          
            <View style={{width:width*0.15,height:height*0.065,borderRadius:50,backgroundColor:'white',top:120,marginLeft:40,position:'absolute'}}><Image source={require('../../Assests/john.jpg')} style={{width:55,height:55,borderRadius:50}}/></View>
            <View style={{width:width*0.15,height:height*0.065,borderRadius:50,backgroundColor:'white',top:80,marginLeft:150,position:'absolute'}}><Image source={require('../../Assests/kaosar.jpg')} style={{width:55,height:55,borderRadius:50}}/></View>
            <View style={{width:width*0.15,height:height*0.065,borderRadius:50,backgroundColor:'white',top:150,marginLeft:270,position:'absolute'}}><Image source={require('../../Assests/moni.webp')} style={{width:55,height:55,borderRadius:50}}/></View>
            <View style={{flexDirection:'row',display:'flex',justifyContent:'center'}}>
            
            <View style={{width:width*0.25,height:height*0.175,backgroundColor:'#8DB3FC',marginHorizontal:3,top:134.5,alignItems:'center',justifyContent:'center',transform:'rotate(353deg)'}}>
            <Text style={{color:'white',fontSize:80,fontWeight:'bold'}}>2</Text>
            <Text style={{color:'white',fontSize:16}}>160pt</Text>
            </View>

            <View style={{width:width*0.25,height:height*0.21,backgroundColor:'#8DB3FC',marginHorizontal:3,top:99.5,alignItems:'center',justifyContent:'center'}}>
             <Text style={{color:'white',fontSize:100,fontWeight:'bold'}}>1</Text>
             <Text style={{color:'white',fontSize:16,marginTop:8}}>223pt</Text>
            </View>

            <View style={{width:width*0.25,height:height*0.14,backgroundColor:'#8DB3FC',marginHorizontal:3,top:165,alignItems:'center',justifyContent:'center',transform:'rotate(9deg)'}}>
            <Text style={{color:'white',fontSize:70,fontWeight:'bold'}}>3</Text>
            <Text style={{color:'white',fontSize:16,marginBottom:10}}>140pt</Text>
            </View>

            </View>
                
           </View>
         
         <View style={{marginTop:40}}>

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <Text style={{fontWeight:'bold',color:'white'}}>1</Text>
                <View style={{width:width*0.12,height:height*0.0,borderRadius:50,backgroundColor:'white',bottom:10}}><Image source={require('../../Assests/moni.webp')} style={{width:48,height:48,borderRadius:50}}/></View>
                <Text style={{fontWeight:'bold',color:'white'}}>Moni</Text>
                <View style={{width:width*0.165,height:height*0.033,borderRadius:20,backgroundColor:"#B9D1FF",justifyContent:'center',alignItems:'center'}}><Text style={{color:'black'}}>233pt</Text></View>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <Text style={{fontWeight:'bold',color:'white'}}>2</Text>
                <View style={{width:width*0.12,height:height*0.0,borderRadius:50,backgroundColor:'white',bottom:10}}><Image source={require('../../Assests/john.jpg')} style={{width:48,height:48,borderRadius:50}}/></View>
                <Text style={{fontWeight:'bold',color:'white'}}>Esha</Text>
                <View style={{width:width*0.165,height:height*0.033,borderRadius:20,backgroundColor:"#B9D1FF",justifyContent:'center',alignItems:'center'}}><Text style={{color:'black'}}>160pt</Text></View>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <Text style={{fontWeight:'bold',color:'white'}}>3</Text>
                <View style={{width:width*0.12,height:height*0.0,borderRadius:50,backgroundColor:'white',bottom:10}}><Image source={require('../../Assests/kaosar.jpg')} style={{width:48,height:48,borderRadius:50}}/></View>
                <Text style={{fontWeight:'bold',color:'white'}}>Kaosar</Text>
                <View style={{width:width*0.165,height:height*0.033,borderRadius:20,backgroundColor:"#B9D1FF",justifyContent:'center',alignItems:'center'}}><Text style={{color:'black'}}>140pt</Text></View>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <Text style={{fontWeight:'bold',color:'white'}}>4</Text>
                <View style={{width:width*0.12,height:height*0.0,borderRadius:50,backgroundColor:'white',bottom:10}}><Image source={require('../../Assests/sam.jpg')} style={{width:48,height:48,borderRadius:50}}/></View>
                <Text style={{fontWeight:'bold',color:'white'}}>Sam</Text>
                <View style={{width:width*0.165,height:height*0.033,borderRadius:20,backgroundColor:"#B9D1FF",justifyContent:'center',alignItems:'center'}}><Text style={{color:'black'}}>130pt</Text></View>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                <Text style={{fontWeight:'bold',color:'white'}}>5</Text>
                <View style={{width:width*0.12,height:height*0.0,borderRadius:50,backgroundColor:'white',bottom:10}}><Image source={require('../../Assests/esha.jpg')} style={{width:48,height:48,borderRadius:50}}/></View>
                <Text style={{fontWeight:'bold',color:'white'}}>John</Text>
                <View style={{width:width*0.165,height:height*0.033,borderRadius:20,backgroundColor:"#B9D1FF",justifyContent:'center',alignItems:'center'}}><Text style={{color:'black'}}>120pt</Text></View>
            </View>

          


         </View>


    </View>
   
    )
 
 };