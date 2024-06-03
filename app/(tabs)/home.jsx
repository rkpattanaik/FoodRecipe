import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Text, View } from "react-native";

import { icons } from "../../constants";
import { RecipeCard } from "../../components";

const Home = () => {
    const [data, setData] = useState([]);

    const getRecipes = async () => {
        try {
            const response = await fetch('https://dummyjson.com/recipes');
            const json = await response.json();
            setData(json.recipes);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getRecipes();
    }, []);
  
    return (
        <SafeAreaView className="bg-primary">
            <FlatList
                data={data}
                keyExtractor={({id}) => id}
                renderItem={({item}) => (
                    <RecipeCard
                        name={item.name}
                        cuisine={item.cuisine}
                        difficulty={item.difficulty}
                        thumbnail={item.image}
                    />
                )}
                ListHeaderComponent={() => (
                    <View className="flex my-6 px-4 space-y-2">
                        <View className="flex justify-between items-start flex-row mb-2">
                            <View>
                                <Text className="text-3xl font-pmedium text-white">Latest Recipes</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default Home;