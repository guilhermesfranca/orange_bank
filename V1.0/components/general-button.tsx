import { ReactNode } from "react";
import { Pressable } from "react-native";

type Props = {
    children: ReactNode;
    onPress: () => void;

}

export const GenButton = ({children, onPress}: Props) => {
    return(
        <Pressable  onPress={onPress} className="bg-gray-100 rounded-xl p-5">
            {children}
        </Pressable>
    );
}