import { SafeAreaView } from "react-native-safe-area-context";
import { Text, ScrollView, View } from "react-native";

import { icons } from "../../constants";
import { SettingRow } from "../../components";

const Settings = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView className="px-4 my-6">
                <Text className="text-3xl text-white font-pmedium">Settings</Text>

                <View className="mt-7 space-y-2"></View>

                <SettingRow
                    icon={icons.profile}
                    title="Profile Settings"
                    subtitle="Update Profile Details."
                />

                <SettingRow
                    icon={icons.notification}
                    title="Notification"
                    subtitle="Update Notification Settings."
                />

                <SettingRow
                    icon={icons.security}
                    title="Privacy & Security"
                    subtitle="Update Privacy & Security Settings."
                />

                <SettingRow
                    icon={icons.favorite}
                    title="My Favorites"
                    subtitle="Check my favorite recipes."
                />

                <SettingRow
                    icon={icons.logout}
                    title="Logout"
                    subtitle="Sign out from the App."
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Settings;