import { Pressable, Text } from "react-native"

type Props = {
    label: string;
    onPress: () => void;
}

export const CustomButton = ({label, onPress}: Props) => {
    return (
        <Pressable className="bg-white h-12 w-full my-2 items-center justify-center rounded-2xl" onPress={onPress}> 
           <Text className="font-bold text-lg text-blue-700"> 
            {label}
           </Text>
        </Pressable>
    )
}