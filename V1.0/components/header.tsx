import {Text, View,  SafeAreaView } from "react-native"
import { ProfileIcon } from "./profile-icon";
import { ButtonIcon } from "./button-icon";


export const Header = () => {
    return(
        <SafeAreaView className="bg-inter text-white"> 
            <View className="flex-row justify-between px-4">
                <ProfileIcon />
                <View className="flex-row">
                <ButtonIcon icon="eye-slash" onPress={()=>{}}/>
                <ButtonIcon icon="circle-question" onPress={()=>{}}/>
                <ButtonIcon icon="message" onPress={()=>{}}/>

                </View>
            </View>
            <View className="px-4 py-7">
                <Text className="text-white font-bold text-xl">Olá, Guilherme</Text>
            </View>
        </SafeAreaView>
    );
}