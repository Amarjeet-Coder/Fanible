import { View,Text, Dimensions, ScrollView, } from "react-native";
const {width,height}=Dimensions.get('screen')
 export default function Quiz(){
    return(
         <ScrollView>
         <View style={{backgroundColor:'black',width:width*1,height:height*1,display:"flex"}}>
            <View style={{width:width*1,height:height*0.4,backgroundColor:"#1e90ff",borderBottomLeftRadius:27,borderBottomRightRadius:27,alignItems:'center'}}>

               <Text style={{fontSize:20,fontWeight:'bold',color:'white',marginTop:30,marginRight:170}}>Trivia</Text>

               <View style={{width:width*0.75,height:height*0.2,borderColor:'black',borderWidth:1,borderRadius:20,backgroundColor:'#1B1B1B',position:"absolute",top:240}}>
               <View style={{width:70,height:70,backgroundColor:'white',borderRadius:100,position:'absolute',bottom:130,left:100,padding:10,alignItems:'center',justifyContent:'center'}}><Text style={{color:"#1e90ff",fontWeight:'bold',fontSize:22}}>6</Text></View>
                <Text style={{textAlign:'center',color:'#1e90ff',marginTop:40,fontSize:13}}>Question 8/10</Text>

                <View style={{marginTop:12}}>
                <Text style={{textAlign:'center',color:'white'}} >In which year,Virat kohli</Text>
                <Text style={{textAlign:'center',color:'white'}}>made his debut in international</Text>
                <Text style={{textAlign:'center',color:'white'}}>cricket??</Text>
                </View>

               </View>
            </View> 
            
            <View style={{marginTop:100}}>
           
            <View style={{width:width*0.65,height:height*0.065,backgroundColor:'#cddeee',borderRadius:20,marginBottom:25,justifyContent:'center',marginLeft:75,borderColor:'blue',borderWidth:2}}>
              <Text style={{position:'absolute',right:250,fontSize:16,color:'white',fontWeight:'bold'}}>A.</Text>
              <Text style={{fontSize:15,fontWeight:400,color:'black',letterSpacing:0.4,marginLeft:30}}>2008</Text>
            </View>
           

           
            <View style={{width:width*0.65,height:height*0.065,backgroundColor:'#cddeee',borderRadius:20,marginBottom:25,justifyContent:'center',marginLeft:75,borderWidth:2,borderColor:'blue'}}>
              <Text style={{position:'absolute',right:250,fontSize:16,color:'white',fontWeight:'bold'}}>B.</Text>
              <Text style={{fontSize:15,fontWeight:400,color:'black',letterSpacing:0.4,marginLeft:30}}>2010</Text>
            </View>

            
            <View style={{width:width*0.65,height:height*0.065,backgroundColor:'#cddeee',borderRadius:20,marginBottom:25,justifyContent:'center',marginLeft:75,borderWidth:2,borderColor:'blue'}}>
              <Text style={{position:'absolute',right:250,fontSize:16,color:'white',fontWeight:'bold'}}>C.</Text>
              <Text style={{fontSize:15,fontWeight:400,color:'black',letterSpacing:0.4,marginLeft:30}}>2012</Text>
            </View>
            
            <View style={{width:width*0.65,height:height*0.065,backgroundColor:'#cddeee',borderRadius:20,marginBottom:25,justifyContent:'center',marginLeft:75,borderWidth:2,borderColor:'blue'}}>
              <Text style={{position:'absolute',right:250,fontSize:16,color:'white',fontWeight:'bold'}}>D.</Text>
              <Text style={{fontSize:15,fontWeight:400,color:'black',letterSpacing:0.4,marginLeft:30}}>2007</Text>
            </View>
               

            </View>
           
    </View>
    </ScrollView>
    )
 
 };