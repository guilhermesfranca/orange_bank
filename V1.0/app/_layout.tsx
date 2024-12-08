import { Stack } from "expo-router";
import { Providers } from "../contexts/providers";
import '../global.css';

export default function RootLayout() {
    return (
    <Providers>
        <Stack> 
            <Stack.Screen name='index' options={{headerShown:false}} /> 
            <Stack.Screen name='about' />
            
        </Stack>
    </Providers>
    )
}