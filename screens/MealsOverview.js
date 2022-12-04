import { useLayoutEffect } from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {View, StyleSheet, FlatList} from 'react-native'
import MealItem from '../component/MealItem';
// import { useRoute } from "@react-navigation/native";

function MealsOverview({ route, navigation }){
  
    // Provides a route into the category of a meal
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {

    return mealItem.categoryIds.indexOf(catId) >=0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({
     title: categoryTitle
    })
  }, [catId, navigation])

  //renders all meal items when a meal category is selected
  function renderMealItem(itemData){
    const item = itemData.item;

    //helper object to pass in props to a component at once
    const mealItemProps = {
        title:item.title,
        imageUrl:item.imageUrl,
        duration:item.duration,
        affordability:item.affordability,
        complexity:item.complexity
    }
    return (
       <MealItem {...mealItemProps} />
    )
  }

  return (
    <View style={styles.container}>
        <FlatList 
        data={displayedMeals} 
        keyExtractor={(item) => item.id} 
        renderItem={renderMealItem}
        />
    </View>
  )
}

export default MealsOverview;

const styles = StyleSheet.create({
    container:{
      flex:1,
      padding:16
    }
})