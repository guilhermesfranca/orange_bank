import { Pressable, View, Text } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome6';
import { ReactNode } from "react";

type Props = {
    title: string;
    onPress: () => void;
    children: ReactNode;
}

export const ButtonCard = ({title, onPress, children}: Props) => {
    return (
        <Pressable className="p-4 py-6" onPress={onPress}>
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-2xl font-semibold">{title}</Text>
                <View className="mr-3">
                    <Icon name="chevron-right" size={16} color="#717276"/>
                </View>
            </View>
            {children}
        </Pressable>
    );
}