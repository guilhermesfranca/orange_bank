import { Pressable, View, Text } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome6';


type Props = {
    icon: string;
    label: string;
    onPress: ()=> void;
    badge?: string;
}

export const Circles = ({icon, label, onPress, badge}:Props) => {
    return (
        <Pressable className="w-24 mx-1" onPress={onPress}>
            <View className="bg-gray-100 size-24 rounded-full items-center justify-center">
                <Icon name={icon} size={24} color="black" />
            </View>
            {badge && 
                <View className="bg-inter h-6 -mt-6 items-center justify-center rounded">
                    <Text className="text-white text-center font-bold ">{badge}</Text>
                </View>
            }
            <Text className="text-sm text-center font-bold mt-2">{label}</Text>
        </Pressable>
    );
}