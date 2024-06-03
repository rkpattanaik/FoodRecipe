import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, Alert, Modal, Image, TouchableOpacity, Pressable, ScrollView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { icons } from "../../constants";
import { CustomButton, FormField } from "../../components";

const CreateProfile = () => {
    const [form, setForm] = useState({
        photo: null,
        name: "",
        dob: "",
        address: "",
        city: "",
        state: "",
        country: "",
    });

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const onDateSelected = (date) => {
        setForm({
            ...form,
            dob: date.toDateString(),
        });
        hideDatePicker();
    };

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const openImageicker = async () => {
        const result = await DocumentPicker.getDocumentAsync({
            type: ["image/png", "image/jpeg"],
        });

        if (!result.canceled) {
            setForm({
                ...form,
                photo: result.assets[0],
            });
        } else {
            setTimeout(() => {
                Alert.alert("Document picked", JSON.stringify(result, null, 2));
            }, 100);
        }
    };

    const submit = () => {
        if (!form.photo || form.name === "" || form.dob === "" || form.address === "" || form.city === "" || form.state === "" || form.country === "") {
            Alert.alert("Error", "Please fill in all fields");
        } else {
            toggleModal()
        }
    };

    return (
        <SafeAreaView className="bg-primary h-full">            
            <ScrollView className="px-4">
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={onDateSelected}
                    onCancel={hideDatePicker}
                />
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        toggleModal();
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Name: {form.name}</Text>
                            <Text style={styles.modalText}>DOB: {form.dob}</Text>
                            <Text style={styles.modalText}>Address: {form.address}, {form.city}, {form.state}, {form.country}</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => toggleModal()}
                            >
                                <Text style={styles.textStyle}>Okay</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <Text className="text-3xl text-white font-pmedium my-6">Create Profile</Text>

                <View className="mt-2 space-y-2">
                    <Text className="text-base text-gray-100 font-pmedium">Profile Picture</Text>

                    <TouchableOpacity onPress={() => openImageicker()}>
                        {form.photo ? (
                            <Image source={{ uri: form.photo.uri }} resizeMode="cover" className="w-full h-64 rounded-2xl"/>
                        ) : (
                            <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-center items-center flex-row space-x-2">
                                <Image source={icons.upload} resizeMode="contain" alt="upload" className="w-5 h-5"/>
                                <Text className="text-sm text-gray-100 font-pmedium">Choose Image</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </View>

                <FormField
                    title="Name"
                    value={form.name}
                    placeholder="Enter Full Name"
                    handleChangeText={(e) => setForm({ ...form, name: e })}
                    otherStyles="mt-7"
                />

                <View className="mt-7 space-y-2">
                    <Text className="text-base text-gray-100 font-pmedium">Date of Birth</Text>

                    <TouchableOpacity onPress={() => showDatePicker()}>
                        {(form.dob !== "") ? (
                            <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex items-center flex-row space-x-2">
                                <Text className="text-sm text-white font-pmedium">{form.dob}</Text>
                            </View>
                        ) : (
                            <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-center items-center flex-row space-x-2">
                                <Image tintColor='#FFA001' source={icons.calendar} resizeMode="contain" alt="upload" className="w-5 h-5 opacity-70"/>
                                <Text className="text-sm text-gray-100 font-pmedium">Select Date</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </View>

                <FormField
                    title="Address"
                    value={form.address}
                    placeholder="Enter Address"
                    handleChangeText={(e) => setForm({ ...form, address: e })}
                    otherStyles="mt-7"
                />

                <FormField
                    title="City"
                    value={form.city}
                    placeholder="Enter City"
                    handleChangeText={(e) => setForm({ ...form, city: e })}
                    otherStyles="mt-7"
                />

                <FormField
                    title="State"
                    value={form.state}
                    placeholder="Select State"
                    handleChangeText={(e) => setForm({ ...form, state: e })}
                    otherStyles="mt-7"
                />

                <FormField
                    title="Country"
                    value={form.country}
                    placeholder="Enter Country"
                    handleChangeText={(e) => setForm({ ...form, country: e })}
                    otherStyles="mt-7"
                />

                <CustomButton
                    title="Submit"
                    handlePress={submit}
                    containerStyles="mt-7 mb-6"
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default CreateProfile;