import React from "react"
import { Text, View, Image, StyleSheet, ScrollView } from "react-native"
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'




const status = () => {
    return (

    <View style={{width:'100%'}}>

      <ScrollView>

        
       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
      <View>


       <Image style={styles.imgetop} source={require('../../../Imges/zia1.jpg')}/>
      
       </View>
       < Image style={styles.imgewhite} source={require('../../../Imges/white.png')}/>

    <Text style={{marginLeft:-21,marginTop:19}}><Icon name="circle-with-plus" size={25} color={'#00A36C'} b/> </Text>

       
        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>My status</Text>
      <Text>Top to add status update</Text>
        </View>

       </View>  


       <Text style={{flex:1, fontSize:15, marginLeft:15,fontWeight:'600'}}>Recent updates</Text>



       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
       < Image style={styles.imgegreen} source={require('../../../Imges/green.png')}/>

        <Image style={styles.imge1} source={require('../../../Imges/shahid.jpeg')}/>


        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Shahid Ur Rehman</Text>
      <Text>15 minutes ago</Text>
        </View>

       </View>  


       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
       < Image style={styles.imgegreen} source={require('../../../Imges/green.png')}/>

        <Image style={styles.imge2} source={require('../../../Imges/zakir.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Zakir Khan</Text>
      <Text>40 minutes ago</Text>
        </View>

    
       </View> 



    
        <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15,}}>
       < Image style={styles.imgegreen} source={require('../../../Imges/green.png')}/>

        <Image style={styles.imge3} source={require('../../../Imges/mujab.jpeg')}/>

        <View style={{flex:1,marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Mujab Khan</Text>
      <Text>Today, 11:30 AM</Text>
        </View>

       </View> 


       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
       < Image style={styles.imgegreen} source={require('../../../Imges/green.png')}/>

        <Image style={styles.imge4} source={require('../../../Imges/zia.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Shahzad </Text>
      <Text>Yesterday, 12:10 PM</Text>
        </View>

       </View> 



    <Text style={{flex:1, fontSize:15, marginLeft:15, fontWeight:'600'}}> Viewed updates</Text>




       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
       < Image style={styles.imgegreen} source={require('../../../Imges/black.png')}/>

        <Image style={styles.imge5} source={require('../../../Imges/ayantech1.jpg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Ayan Tech </Text>
      <Text>Yesterday, 1:35 PM</Text>
        </View>

       </View> 



       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
       < Image style={styles.imgegreen} source={require('../../../Imges/black.png')}/>

        <Image style={styles.imge6} source={require('../../../Imges/mossa.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Mossa Ahmed </Text>
      <Text>Yesterday, 3:15 PM</Text>
        </View>

       </View> 


       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
       < Image style={styles.imgegreen} source={require('../../../Imges/black.png')}/>

        <Image style={styles.imge7} source={require('../../../Imges/mobile.jpg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}> Appo </Text>
      <Text>Yesterday, 4:50 PM</Text>
        </View>

    
       </View> 

       

      
       

       

   
    </ScrollView>

<View style={{position: 'absolute', bottom: 40, right: 30 }} >
<View style={{bottom:20, width: 45, height: 45, borderRadius: 25, backgroundColor: '#D1D4D4', justifyContent: 'center', alignItems: 'center' }} >
<MaterialIcons from size={25} name={'edit'}  />
</View>

<View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#00A36C', justifyContent: 'center', alignItems: 'center' }} >
<FontAwesome from size={25} name={'camera'} color={'white'} />
</View>
</View>

</View>
    )
};

    const styles = StyleSheet.create({

        imgetop:{
            height:45,
            width:45,
             borderRadius:50,
            
          },

          imgewhite:{
            marginLeft:-14,
            marginTop:20,
            height:21,
            width:21,
             borderRadius:50,
            
          },
        

        imgegreen:{
        
          
          
         
          height:50,
          width:50,
           borderRadius:50,
          
        },


 imge1:{
   height:45,
   width:45,
   marginLeft:-48,
   marginTop:3,
    borderRadius:50,
   
 },

 imge2:{
   height:45,
   width:45,
   marginLeft:-48,
   marginTop:3,
   borderRadius:50,
  
},

imge3:{
   height:45,
   width:45,
   marginLeft:-48,
   marginTop:3,
   borderRadius:50,
  
},

imge4:{
   height:45,
   width:45,
   marginLeft:-48,
   marginTop:3,
   borderRadius:50,
  
},

imge5:{
   height:45,
   width:45,
   marginLeft:-48,
   marginTop:3,
   borderRadius:50,
  
},

imge6:{
   height:45,
   width:45,
   marginLeft:-48,
   marginTop:3,
   borderRadius:50,
  
},

imge7:{
   height:45,
   width:45,
   marginLeft:-48,
   marginTop:3,
   borderRadius:50,
  
},


    });


export default status