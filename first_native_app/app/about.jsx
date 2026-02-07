import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

//themed components
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';
const About = () => {
   
  return (
    <ThemedView style= {[styles.container]}>
      <ThemedText style= {{fontSize:20}}>About page</ThemedText>
      <Link href="/" style={styles.button}>To index</Link>
    </ThemedView>
    
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
