import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton } from "../components";

const Welcome = () => {

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[180px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.onboarding}
            className="max-w-[360px] w-full h-[270px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-psemibold text-center">
              Discover Endless{"\n"}
              Recipes with{" "}
              <Text className="text-secondary-200 font-psemibold">Tastopia</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[120px] h-[14px] absolute -bottom-2 -right-0"
              resizeMode="cover"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Every Recipe is a Journey; Unlock the Flavors of Your Imagination with Tastopia!
          </Text>

          <CustomButton
            title="Continue to Tastopia"
            handlePress={() => router.push("/login")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;