import { StyleSheet, Text, View, useColorScheme} from 'react-native'
import { Link } from 'expo-router'
import {Colors} from '../constants/colors'
const About = () => {
  const colorscheme = useColorScheme()
  const theme=Colors[colorscheme] 
  return (
    <View style= {[styles.container,{backgroundColor:theme.background}]}>
      <Text style= {{color:theme.text,fontSize:20}}>About page default</Text>
      <Link href="/" style={styles.button}>To index</Link>
    </View>
    
  )
}

export default About

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
    padding:5,
    borderRadius:5
    
  }
})
