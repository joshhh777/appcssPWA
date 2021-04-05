import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, ScrollView, Image,Button } from 'react-native';

import {
	Ionicons,
	MaterialCommunityIcons
} from '@expo/vector-icons'


//import './app.css'np

const App = () =>(
  <View>

  <View style={styles.todo}>
  
    <View style={styles.cabezera}>
    <MaterialCommunityIcons name='whatsapp' size={50} color='green'></MaterialCommunityIcons>
    <MaterialCommunityIcons name='facebook-messenger' size={50} color='blue'></MaterialCommunityIcons>
    
      <TextInput style ={styles.input}>
        <Text ><Ionicons name='search' size={25} color='white'   /></Text>
      </TextInput>
    </View>
    <View style ={styles.subcabeza}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginStart:291}} >
    <Button title="Iniciar Sesion" style={{}}></Button>
    </ScrollView>
    </View>


    <View style={styles.cuerpo}>

      
    <ScrollView  > 

    <View style={styles.cuerpolibros}>
      <Text style={styles.titulos}>LIBROS</Text>
    <ScrollView  style ={styles.caja} horizontal showsHorizontalScrollIndicator={false} >   
    
    <View style={styles.imgjug}>  
    <Image source={require('./assets/libros/lib1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/libros/lib2.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/libros/lib4.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/libros/lib7.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>


    </ScrollView>
    </View>

    <View style={styles.cuerpojuguetes}>
      <Text style={styles.titulos}>JUGUETES</Text>
    <ScrollView  style ={styles.caja} horizontal showsHorizontalScrollIndicator={false} > 

    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug2.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug3.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug4.webp')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug5.webp')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug6.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug7.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>

    </ScrollView>
    </View>

    <View style={styles.cuerpoutiles}>
      <Text style={styles.titulos}>UTILES</Text>
    <ScrollView  style ={styles.caja} horizontal showsHorizontalScrollIndicator={false} >   
    
    <View style={styles.imgjug}>  
    <Image source={require('./assets/utiles/u1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/utiles/u2.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/utiles/u3.webp')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/utiles/u4.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/utiles/u5.png')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/utiles/u6.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    <Text style={styles.textdes} >$10.00</Text>
    </View>


    </ScrollView>
    </View>

    <View style={styles.cuerporopa}>
      <Text style={styles.titulos}>ROPA</Text>
    <ScrollView  style ={styles.caja} horizontal showsHorizontalScrollIndicator={false} >   
    
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    </View>
    <View style={styles.imgjug}>  
    <Image source={require('./assets/jug/jug1.jpg')} style={styles.img}></Image>
    <Text style={styles.textdes}>PICACHU</Text>
    </View>


    </ScrollView>
    </View>

    </ScrollView>

    </View>

    </View>
    
    </View>
  );

 
  


const styles = StyleSheet.create({

 subcabeza:{
   
  
  
  },

  textdes:{
    textAlign:'center',
    color:'white'
  },

  imgjug:{
     backgroundColor:'black',
     marginStart:5,
     borderRadius:10   

  },

  todo:{

       backgroundColor:'black'
  },

  titulos:{
     color:'white',
     fontSize:20 


  },
  caja:{
    marginStart:4,
    marginVertical:10,
    
  },

  img:{
    marginVertical:10,
    width:200,
    height:280,
    borderRadius: 15,
    marginStart:10,
    marginEnd:10,

  },

  cabezera:{
    flexDirection:'row',
    alignContent:'center',
    marginEnd:5,
    marginRight:5,
    alignItems:'flex-start',
    marginTop:40,
    borderRadius:3
  },

  cuerpolibros:{
    borderTopStartRadius:20,
    alignItems:'center',
    marginVertical:5,
    backgroundColor:'#AB221E'

  },
  cuerpojuguetes:{
    borderTopLeftRadius:20,
    marginVertical:5,
    alignItems:'center',
    backgroundColor:'#7BEE00'

  },
  cuerpoutiles:{
    borderTopLeftRadius:20,
    marginVertical:5,
    alignItems:'center',
    backgroundColor:'#21E4EC'

  },
  cuerporopa:{
    borderTopLeftRadius:20,
    marginVertical:5,
    alignItems:'center',
    backgroundColor:'red'

  },

  texto:{

    fontSize:100,
    color:'red'  
  },

  input:{
    borderRadius:15,
    marginTop:4,
    marginVertical:4,
    marginHorizontal:2,
    borderWidth:1,
   borderColor:'white',
   width:300,
   height:50, 

  }

  

});

export default App;

