import React from "react"
import { Text, View, Image, StyleSheet, ScrollView, videocam } from "react-native"
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const Call = () => {
    return (

    <View style={{width:'100%'}}>

      <ScrollView>

         

       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge1} source={require('../../../Imges/junad.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Junad Khan</Text>
      <Text><MaterialCommunityIcons name="arrow-bottom-left" size={20}color={'#00A36C'}/> 15 minutes ago</Text>
        </View>
        <View>
        <Text><MaterialIcons name="call"  size={25} color={'#00A36C'} /></Text>

    
        </View>

       </View>  



       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge2} source={require('../../../Imges/mossa.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Mossa Ahmed</Text>
      <Text><MaterialCommunityIcons name="arrow-bottom-left" size={20}color={'red'}/> 40 minutes ago</Text>
        </View>
        <View>
        <Text><MaterialIcons name="call"  size={25} color={'#00A36C'} /></Text>

        </View>
    
       </View> 



    
        <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15,}}>
        <Image style={styles.imge3} source={require('../../../Imges/police.jpeg')}/>

        <View style={{flex:1,marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>D.Company</Text>
      <Text><MaterialCommunityIcons name="arrow-bottom-left" size={20}color={'red'}/>Today, 11:30 AM</Text>
        </View>
        <View>
        <Text><MaterialIcons name="call"  size={25} color={'#00A36C'} /></Text>

        </View>
       </View> 


       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge4} source={require('../../../Imges/atta.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Atta Ur Rehman </Text>
      <Text><MaterialCommunityIcons name="arrow-bottom-left" size={20}color={'red'}/>Yesterday, 12:10 PM</Text>
        </View>
        <View>
        <Text><MaterialIcons name="videocam"  size={25} color={'#00A36C'} /></Text>

        </View>

       </View> 




       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge5} source={require('../../../Imges/omer.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Omer Zareen </Text>
      <Text><MaterialCommunityIcons name="arrow-bottom-left" size={20}color={'#00A36C'}/>Yesterday, 1:35 PM</Text>
        </View>
        <View>
        <Text><MaterialIcons name="call"  size={25} color={'#00A36C'} /></Text>

        </View>

       </View> 



       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge6} source={require('../../../Imges/noman.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Noman </Text>
      <Text><MaterialCommunityIcons name="arrow-bottom-left" size={20}color={'#00A36C'}/>Yesterday, 3:15 PM</Text>
        </View>
        <View>
        <Text><MaterialIcons name="call"  size={25} color={'#00A36C'} /></Text>

        </View>

       </View> 
       


       <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',margin:15}}>
        <Image style={styles.imge7} source={require('../../../Imges/khan.jpeg')}/>

        <View style={{flex:1, marginLeft:20}}>
      <Text style={{fontSize:16,color:'black', fontWeight:'600'}}>Muhammad Zamin </Text>
      <Text><MaterialCommunityIcons name="arrow-bottom-left" size={20}color={'red'}/>Yesterday, 4:50 PM</Text>
        </View>
         <View>
         <Text><MaterialIcons name="videocam"  size={25} color={'#00A36C'} /></Text>

        </View>

    
       </View> 

       

      
       

       

    </ScrollView>

<View style={{position: 'absolute', bottom: -15, right: 30 }} >
<View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#00A36C', justifyContent: 'center', alignItems: 'center' }} >
<MaterialIcons size={22} name={'add-call'} color={'white'} />
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


export default Call