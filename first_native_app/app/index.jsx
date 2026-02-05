import { StyleSheet, Text, View,Image } from 'react-native'
import logo from '../assets/images/react-logo.png'
import {Link} from 'expo-router'
const home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Link href="/about" style={styles.button}>button</Link>
      </View>
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
  button:{
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:"rgb(138, 201, 44)",
    
  }
})
