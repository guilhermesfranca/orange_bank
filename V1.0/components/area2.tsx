import { useContext } from "react"
import { View, Text } from "react-native"
import { AuthContext } from "../contexts/auth"

export const Area2 = () => {
    const auth = useContext(AuthContext)
    return (
        <View> 
            <Text>email: {auth?.data.user?.email} </Text>
        </View>
    )
}