import { StyleSheet, Text, View,Image } from 'react-native'
import logo from '../assets/images/react-logo.png'

const home = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:25}}> hello</Text>
      <Image source={logo} style={{margin:10}}/>
    </View>


  )
}

export default home

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  
  },
})
