import {View, Text, StyleSheet, Pressable, Image, Platform} from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }){
  return (
    <View style={styles.mealItem}>
        <Pressable  android_ripple={{color:'#ccc'}} 
         style={({ pressed }) => pressed ? styles.buttonPressed : null}
        >
         <View style={styles.innerContainer}>
         <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
         </View>
         <View style={styles.mealDetails}>
            <Text style={styles.detail}>{duration}m</Text>
            <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
         </View>
         </View>
        </Pressable>
        
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
 mealItem:{
    margin:16,
    borderRadius:8,
    
    backgroundColor:'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset:{width: 0, height: 2},
    shadowRadius: 16,
    overflow:Platform.OS === 'android' ? 'hidden' : 'visible'
 },
 innerContainer:{
    borderRadius:8,
    overflow:'hidden',
 },
 image:{
    width:'100%',
    height:200
 },
 title:{
    fontWeight:'bold',
    fontSize:18,
    textAlign:'center',
    margin:8
 },
 mealDetails:{
  flexDirection:'row',
  alignItems:'center',
  padding:8,
  justifyContent:'center'
 },
 detail:{
  marginHorizontal: 4,
  fontSize:12,
  fontWeight:'700'
 },
 buttonPressed:{
    opacity: 0.5
  },
})