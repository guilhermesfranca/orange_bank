import { useContext } from "react"
import { View, Text } from "react-native"
import { AuthContext } from "../contexts/auth"

export const Area1 = () => {
const auth = useContext(AuthContext)

    return (
        <View> 
            <Text>nome: {auth?.data.user?.name} </Text>
        </View>
    )
}