import { View,Text, Dimensions, ScrollView, } from "react-native";
const {width,height}=Dimensions.get('screen')
 export default function EntryAmount(){
    return(<ScrollView>
    <View style={{backgroundColor:'black',width:width*1,height:height*1,display:"flex"}}>
            <View style={{width:width*1,height:height*0.4,backgroundColor:"#1e90ff",borderBottomLeftRadius:27,borderBottomRightRadius:27}}>
                <View style={{marginTop:40}}>
                  <Text style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'white',letterSpacing:0.4}}>Select your entry</Text>
                  <Text style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'white',letterSpacing:0.4}}>amount to join the quiz</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:80}}>
                    <View style={{width:width*0.4,height:height*0.06,backgroundColor:'#cddeee',borderRadius:20}}>
                       <Text style={{textAlign:'center',fontWeight:'bold',letterSpacing:0.5,fontSize:12,marginTop:5,color:'black'}}>View today's</Text>
                       <Text style={{textAlign:'center',fontWeight:'bold',letterSpacing:0.5,fontSize:12,color:'black'}}>leaderboard</Text>
                    </View>

                   <View style={{width:width*0.4,height:height*0.06,backgroundColor:'#cddeee',borderRadius:20}}>
                     <Text style={{textAlign:'center',fontWeight:'bold',letterSpacing:0.5,fontSize:12,marginTop:5,color:'black'}}>View winners</Text>
                     <Text style={{textAlign:'center',fontWeight:'bold',letterSpacing:0.5,fontSize:12,color:'black'}}>breaking</Text>
                  </View>

                </View>
                
                <View style={{margin:40}}>
                    <Text style={{textAlign:'center',fontSize:13,fontWeight:'bold',color:'white',letterSpacing:0.4}}>NOTE:Must view the Winner</Text>
                    <Text style={{textAlign:'center',fontSize:13,fontWeight:'bold',color:'white',letterSpacing:0.4}}>breakings before entering the</Text>
                    <Text style={{textAlign:'center',fontSize:13,fontWeight:'bold',color:'white',letterSpacing:0.4}}>amount</Text>
                </View>
            </View>    


           <View style={{flexDirection:'row',justifyContent:"space-between"}}>

           <View style={{marginTop:50,marginBottom:20,marginLeft:20}}>
            <View style={{width:width*0.22,height:height*0.04,backgroundColor:'#1B1B1B',borderRadius:20,alignItems:'center',justifyContent:'center',marginBottom:12}}>
              <Text style={{fontSize:11,fontWeight:'bold',color:'white',letterSpacing:0.4}}>FREE TRAIL</Text>
            </View>
            <View style={{width:width*0.22,height:height*0.04,backgroundColor:'#1B1B1B',borderRadius:20,alignItems:'center',justifyContent:'center',marginBottom:12}}>
              <Text style={{fontSize:11,fontWeight:'bold',color:'white',letterSpacing:0.4}}>Rs.20</Text>
            </View>
            <View style={{width:width*0.22,height:height*0.04,backgroundColor:'#1B1B1B',borderRadius:20,alignItems:'center',justifyContent:'center',marginBottom:12}}>
              <Text style={{fontSize:11,fontWeight:'bold',color:'white',letterSpacing:0.4}}>Rs.40</Text>
            </View>
            <View style={{width:width*0.22,height:height*0.04,backgroundColor:'#1B1B1B',borderRadius:20,alignItems:'center',justifyContent:'center',marginBottom:12}}>
              <Text style={{fontSize:11,fontWeight:'bold',color:'white',letterSpacing:0.4}}>Rs.100</Text>
            </View>
            <View style={{width:width*0.22,height:height*0.04,backgroundColor:'#1B1B1B',borderRadius:20,alignItems:'center',justifyContent:'center',marginBottom:12}}>
              <Text style={{fontSize:11,fontWeight:'bold',color:'white',letterSpacing:0.4}}>Rs.1000</Text>
            </View>
           </View>

           <View style={{marginTop:50,marginRight:20,marginBottom:20}}>
            <View style={{width:width*0.22,height:height*0.04,backgroundColor:'#1B1B1B',borderRadius:20,alignItems:'center',justifyContent:'center',marginBottom:12}}>
              <Text style={{fontSize:11,fontWeight:'bold',color:'white',letterSpacing:0.4}}>Rs.10</Text>
            </View>
            <View style={{width:width*0.22,height:height*0.04,backgroundColor:'#1B1B1B',borderRadius:20,alignItems:'center',justifyContent:'center',marginBottom:12}}>
              <Text style={{fontSize:11,fontWeight:'bold',color:'white',letterSpacing:0.4}}>Rs.30</Text>
            </View>
            <View style={{width:width*0.22,height:height*0.04,backgroundColor:'#1B1B1B',borderRadius:20,alignItems:'center',justifyContent:'center',marginBottom:12}}>
              <Text style={{fontSize:11,fontWeight:'bold',color:'white',letterSpacing:0.4}}>Rs.50</Text>
            </View>
            <View style={{width:width*0.22,height:height*0.04,backgroundColor:'#1B1B1B',borderRadius:20,alignItems:'center',justifyContent:'center',marginBottom:12}}>
              <Text style={{fontSize:11,fontWeight:'bold',color:'white',letterSpacing:0.4}}>Rs.500</Text>
            </View>
            <View style={{width:width*0.22,height:height*0.04,backgroundColor:'#1B1B1B',borderRadius:20,alignItems:'center',justifyContent:'center',marginBottom:12}}>
              <Text style={{fontSize:11,fontWeight:'bold',color:'white',letterSpacing:0.4}}>Custom</Text>
            </View>
           </View>


           </View>

    </View>
    </ScrollView>
    )
 
 };