import { StyleSheet, useColorScheme, Text, View,Image } from 'react-native'
import {Colors} from '../constants/colors'
import {Link} from 'expo-router'
const home = () => {
  const colorscheme = useColorScheme()
  const theme=Colors[colorscheme] 
  return (
    
    <View style= {[styles.container,{backgroundColor:theme.background}]}>
      <Text style= {{color:theme.text,fontSize:20}}>THE APP</Text>
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
    margin:10,
    
  }
})
