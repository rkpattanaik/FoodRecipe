import { View, Text, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const RecipeCard = ({ name, cuisine, difficulty, thumbnail }) => {
    return (
        <View className="flex flex-col items-center px-4 mb-12">
            <View className="flex flex-row gap-3 items-start">
                <View className="flex justify-center items-center flex-row flex-1">
                    <View className="flex justify-center flex-1 gap-y-1">
                        <Text className="font-psemibold text-sm text-white" numberOfLines={1}>{name}</Text>
                        <Text className="text-xs text-gray-100 font-pregular" numberOfLines={1}>
                            {cuisine} | {difficulty}
                        </Text>
                    </View>
                </View>

                <View className="pt-2">
                    <Image tintColor='#CDCDE0' source={icons.favorite} className="w-5 h-5" resizeMode="contain" />
                </View>
            </View>

            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => console.log("Show Recipe Details")}
                className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
            >
                <Image source={{ uri: thumbnail }} className="w-full h-full rounded-xl mt-3" resizeMode="cover"/>
            </TouchableOpacity>
        </View>
    );
};

export default RecipeCard;