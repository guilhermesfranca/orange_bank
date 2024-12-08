import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import {StyleSheet, Text, View} from "react-native"; 

type Query = { 
    name?: string; 
    age?: string;
}

    export default function Screen() {

        const { name, age } = useLocalSearchParams<Query>();

    return (
        <View style={styles.container}> 
            <Text> About the creator: {name} e tem {age} anos </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        justifyContent: 'center',
        alignItems: 'center',
    },
});