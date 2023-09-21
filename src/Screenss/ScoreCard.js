import { View,Text, Dimensions, ScrollView, } from "react-native";
const {width,height}=Dimensions.get('screen')
 export default function ScoreCard(){
    return(
         <ScrollView>
         <View style={{backgroundColor:'black',width:width*1,height:height*1}}>
            <View style={{width:width*1,height:height*0.4,backgroundColor:"#1e90ff",borderBottomLeftRadius:27,borderBottomRightRadius:27,alignItems:'center'}}>
            
            <View style={{width:150,height:150,top:80,backgroundColor:'white',borderRadius:100,justifyContent:'center',opacity:0.6}}>
             <View style={{width:120,height:120,left:15,backgroundColor:'white',borderRadius:100,justifyContent:'center',position:'absolute'}}>
                <View style={{width:90,height:90,backgroundColor:'white',borderRadius:100,position:'absolute',left:15}}>
                
                  <Text style={{color:"#1e90ff",fontWeight:'bold',fontSize:16,top:20,margin:4}}>Your Score</Text>

                   <View style={{flexDirection:'row'}}>
                     <Text style={{color:"#1e90ff",fontWeight:900,fontSize:22,top:15,left:17}}>100</Text>
                     <Text style={{color:"#1e90ff",fontSize:16,top:18,left:22}}>pt</Text>
                   </View>
                </View>    
             </View>
            </View>
            

               <View style={{width:width*0.8,height:height*0.19,borderColor:'black',borderWidth:1,borderRadius:20,backgroundColor:'#1B1B1B',position:"absolute",top:250,flexDirection:'row'}}>
                 <View>
                    <View style={{marginTop:25,marginLeft:30}}>
                         <View style={{flexDirection:'row'}}>
                           <View style={{width:13,height:13,backgroundColor:'#1e90ff',borderRadius:100,top:8,right:10}}>

                           </View>

                           <View>
                           <Text style={{color:"#1e90ff",fontWeight:'bold',fontSize:18}}>100%</Text>
                           <Text style={{letterSpacing:0.5,color:"#1e90ff",}}>Completion</Text>
                           </View>

                         </View>
                       </View> 

                    <View style={{marginTop:25,marginLeft:30}}>
                    
                    <View style={{flexDirection:'row'}}>
                    <View style={{width:13,height:13,backgroundColor:'green',borderRadius:100,top:8,right:10}}>

                    </View>

                       <View>
                       <Text style={{color:'green',fontWeight:'bold',fontSize:18}}>03</Text>
                       <Text style={{letterSpacing:0.5,color:'green'}}>Correct</Text>
                       </View>

                    </View>
                    </View>
                 </View>

                 <View>
                    <View style={{marginTop:25,marginLeft:30}}>
                     <View style={{flexDirection:'row'}} >
                    <View style={{width:13,height:13,backgroundColor:'#1e90ff',borderRadius:100,top:8,right:10}}>

                    </View>
                       <View>
                       <Text style={{color:"#1e90ff",fontWeight:'bold',fontSize:18}}>10</Text>
                       <Text style={{letterSpacing:0.5,color:"#1e90ff"}}>Total Question</Text>
                       </View>

                      </View>
                     </View>

                    <View style={{marginTop:25,marginLeft:30}}>
                        
                     <View style={{flexDirection:'row'}}>
                    <View style={{width:13,height:13,backgroundColor:'#e55039',borderRadius:100,top:8,right:10}}>

                    </View>

                       <View>
                       <Text style={{color:'#e55039',fontWeight:'bold',fontSize:18}}>07</Text>
                       <Text style={{letterSpacing:0.5,color:'#e55039'}}>Wrong</Text>
                       </View>

                     </View>

                    </View>
                 </View>
           
                </View>
           </View>
         

          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={{width:60,height:60,backgroundColor:'#E1BEE7',borderRadius:100,top:120}}></View>
                <View style={{width:60,height:60,backgroundColor:'#90CAF9',borderRadius:100,top:120}}></View> 
          </View>  

          <View style={{flexDirection:'row',margin:10}}>
                <Text style={{color:'white',top:120,fontWeight:'bold',opacity:0.6,left:40,letterSpacing:0.5,fontSize:14}}>Leaderboard</Text>
                <Text style={{color:'white',top:120,fontWeight:'bold',opacity:0.6,left:140,letterSpacing:0.5,fontSize:14}}>Share Score</Text> 
          </View>  
           
           <View>
               <Text style={{textAlign:'center',top:170,fontWeight:'bold',color:'white',fontSize:18}}>
                 Congrats! You won Rs.40
               </Text>
               
               <View style={{left:70}}>
               <Text style={{top:170,fontWeight:'bold',color:'#90CAF9',fontSize:16,width:250,top:190,opacity:0.6}}>
                The amount will be added to your wallet. You can either withdraw it or you can use it in your next quiz.
               </Text>
               </View>

           </View>

         </View>

       </ScrollView>
    )
 
 };