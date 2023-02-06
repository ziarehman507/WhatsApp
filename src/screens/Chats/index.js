import React from "react"
import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



const Chats = () => {
    return (

    <View style={{width:'100%'}}>

      <ScrollView>



       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge1} source={require('../../../Imges/mujab.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Mujab Khan</Text>
      <Text> <Icon name="md-checkmark-done-sharp"  size={20} color="#3498DB" /> ok</Text>
      
        </View>

        <View>
      <Text>3:20 PM</Text>
        </View>

       </View>  


       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge2} source={require('../../../Imges/omer.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Omer Zareen</Text>
      <Text><MaterialCommunityIcons name="microphone"  size={20} color="#3498DB" /> 0:05 </Text>
        </View>

        <View>
      <Text>5:10 PM</Text>
        </View>
       </View> 



    
        <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15,}}>
        <Image style={styles.imge3} source={require('../../../Imges/swatshaheen.jpeg')}/>

        <View style={{flex:1,marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Swat Shaheen</Text>
      <Text><MaterialCommunityIcons name="phone-missed"  size={20} color="red" />  Missed Voice call </Text>

        </View>

        <View>
      <Text style={{display:'flex'}}>5:30 PM</Text>
        </View>
       </View> 

       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge4} source={require('../../../Imges/junad.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Junad Khan </Text>
      <Text><Icon name="checkmark-sharp"  size={20}  /><MaterialCommunityIcons name="microphone"  size={20}  /> 0:12 </Text>

        </View>

        <View>
      <Text>6:15 PM</Text>
        </View>
       </View> 


       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge5} source={require('../../../Imges/khan.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{flex:1, fontSize:16,color:'black', fontWeight:'600'}}>Zamin Khan </Text>
      <Text>jalti karo</Text>
        </View>

        <View>
      <Text>7:00 PM</Text>
        </View>
       </View> 



       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge6} source={require('../../../Imges/mossa.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Mossa Ahmed </Text>
      <Text> <MaterialIcons name="missed-video-call"  size={25} color={'red'} />  </Text>
      <Text style={{flex:1, marginTop:-24, marginLeft:29}}>Missed video call</Text>
        </View>

        <View>
      <Text>7:05 PM</Text>
        </View>
       </View> 


       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge7} source={require('../../../Imges/atta.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{flex:1, fontSize:16,color:'black', fontWeight:'600'}}>Ata ur rehman </Text>
      <Text><MaterialIcons name="insert-photo"  size={25} /></Text>
      <Text style={{flex:1, marginTop:-24, marginLeft:27}}>photo</Text>

        </View>

        <View>
      <Text>7:10 PM</Text>
        </View>
       </View> 

       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15, display:'flex'}}>
        <Image style={styles.imge8} source={require('../../../Imges/shahid.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Shahid Ur Rehman</Text>
      <Text ><Icon name="md-checkmark-done-sharp"  size={20} color="#3498DB" />wifi kaha ha</Text>
        </View>

        <View>
      <Text>7:50 PM</Text>
        </View>
       </View> 

       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge9} source={require('../../../Imges/wali.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Abdul Wali </Text>
      <Text>voice karo</Text>
        </View>

        <View>
      <Text>8:10 PM</Text>
        </View>
       </View>

       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge10} source={require('../../../Imges/zia.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Zia Ur Rehman </Text>
      <Text>zia duty kaha ha</Text>
        </View>

        <View>
      <Text>9:10 PM</Text>
        </View>
       </View>

       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge11} source={require('../../../Imges/zakir.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Zakir khan </Text>
      <Text>Army boy</Text>
        </View>

        <View>
      <Text>10:10 AM</Text>
        </View>
       </View>

       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge12} source={require('../../../Imges/ayantech1.jpg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Ayan Tech </Text>
      <Text>Sir aj class ha</Text>
        </View>

        <View>
      <Text>11:00 AM</Text>
        </View>
       </View>

       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge13} source={require('../../../Imges/laptop.jpg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Laptop shop </Text>
      <Text>dell lcd price</Text>
        </View>

        <View>
      <Text>11:45 AM</Text>
        </View>
       </View>

    </ScrollView>

      <View style={{position: 'absolute', bottom: 40, right: 30 }} >
        <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#00A36C', justifyContent: 'center', alignItems: 'center' }} >
        <MaterialCommunityIcons size={25} name={'android-messages'} color={'white'} />
        </View>
      </View>
    
    </View>

    );
};

    const styles = StyleSheet.create({
       

 imge1:{
   height:45,
   width:45,
    borderRadius:50,
   
 },

 imge2:{
   height:45,
   width:45,
   borderRadius:50,
  
},

imge3:{
   height:45,
   width:45,
   borderRadius:50,
  
},

imge4:{
   height:45,
   width:45,
   borderRadius:50,
  
},

imge5:{
   height:45,
   width:45,
   borderRadius:50,
  
},

imge6:{
   height:45,
   width:45,
   borderRadius:50,
  
},

imge7:{
   height:45,
   width:45,
   borderRadius:50,
  
},

imge8:{
   height:45,
   width:45,
   borderRadius:50,
  
},
    
imge9:{
  height:45,
  width:45,
  borderRadius:50,
 
},

imge10:{
  height:45,
  width:45,
  borderRadius:50,
 
},

imge11:{
  height:45,
  width:45,
  borderRadius:50,
 
},

imge12:{
  height:45,
  width:45,
  borderRadius:50,
 
},

imge13:{
  height:45,
  width:45,
  borderRadius:50,
 
},
    });


export default Chats