import { View, Text, Image } from "react-native";

const SettingRow = ({ icon, title, subtitle }) => {
    return (
        <View className="flex flex-col items-center mb-10">
            <View className="flex flex-row gap-3 items-start">
                <View className="flex justify-center items-center flex-row flex-1">
                    <View className="pt-2">
                        <Image tintColor='#CDCDE0' source={icon} className="w-8 h-8" resizeMode="contain" />
                    </View>

                    <View className="flex justify-center flex-1 ml-3 gap-y-1">
                        <Text className="font-psemibold text-sm text-white" numberOfLines={1}>{title}</Text>
                        <Text className="text-xs text-gray-100 font-pregular" numberOfLines={1}>{subtitle}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SettingRow;