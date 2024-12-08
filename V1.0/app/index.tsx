import {Button, StyleSheet, TextInput, Text, View, ScrollView} from "react-native"; 
import { Header } from "../components/header";
import { ButtonCard } from "../components/button-card";
import { Circles } from "../components/circles";
import { GenButton } from "../components/general-button";
import Icon from '@expo/vector-icons/FontAwesome6';


export default function Screen() { 

    return (
        <ScrollView className="h-screen bg-white">
            <Header/>
            <ButtonCard title="Conta" onPress={() => {}}> 
                <Text className="text-xl font-semibold">R$ 1.000.000,00</Text>
            </ButtonCard>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-3"> 
                <Circles icon="pix" label="Pix" onPress={() => {}}/>
                <Circles icon="barcode" label="Pagar" onPress={() => {}}/>
                <Circles icon="hand-holding-dollar" label="Pegar emprestrado" badge="R$ 67.200" onPress={() => {}}/>
                <Circles icon="money-bill-transfer" label="Transferir" onPress={() => {}}/>
                <Circles icon="landmark" label="Depositar" onPress={() => {}}/>
                <Circles icon="file-invoice-dollar" label="Cobrar" onPress={() => {}}/>
                <Circles icon="money-bill-trend-up" label="Investir" onPress={() => {}}/>
            </ScrollView>

            <View className="px-4 py-6">
                <GenButton onPress={() => {}}> 
                <View className="flex-row items-center">
                    <Icon name="credit-card" size={28} color="black"/>
                    <Text className="ml-4 text-lg font-semibold">Meus cartões</Text>
                </View>
                </GenButton>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
                <View className="w-72 mr-4">
                    <GenButton onPress={()=>{}}>
                <View className="flex-row flex-wrap gap-x-1">
                    <Text className="text-lg">Você tem</Text>
                    <Text className="font-bold text-lg text-inter">R$ 67.200,00</Text> 
                    <Text className="text-lg">disponíveis para empréstimo</Text>
                </View>
                    </GenButton>
                </View>
                <View className="w-72">
                <GenButton onPress={()=>{}}>
                <View className="flex-row flex-wrap gap-x-1">
                    <Text className="text-lg">Aqui seu dinheiro rende</Text>
                    <Text className="font-bold text-lg text-inter">110% do CDI.</Text> 
                    <Text className="text-lg">saiba mais</Text>
                </View>
                </GenButton>
                </View>
            </ScrollView>

            <View className="h-1 bg-gray-100 mt-8"></View>

            <ButtonCard title="Cartão de crédito" onPress={() =>{}}> 
                <Text className="text-xl text-gray-500">Fatura atual</Text>
                <Text className="text-xl font-semibold">R$ 53.594,00</Text>
                <Text className="text-xl text-gray-500">Limite disponível: R$37.406,00</Text>

            </ButtonCard>
        </ScrollView>
        
    
    );
};