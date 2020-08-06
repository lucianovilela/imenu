import * as React from 'react';
import { Text, View, TextInput, Button, ScrollView, 
FlatList, StyleSheet, SafeAreaView, TouchableOpacity, Modal, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { Navigation } = require('@react-navigation/native');

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './Styles';

import Botao from '../components/Botao';


const RestauranteScreen=({navigator})=> {
  return (
    <SafeAreaView style={styles.containerRestaurante}>
      <View>
        <View>
          <Text style={styles.titulo}>Nome</Text>
          <TextInput style={styles.textInput} placeholder="Insira o nome do seu estabelecimento" />
          <Text style={styles.titulo}>Descrição</Text>
          <TextInput style={styles.textInput} placeholder="Descreva seu estabelecimento" />
        </View>
        <View>  
          <Botao style={styles.buttonLogin}  title="Salvar"/>
        </View>
      </View>
    </SafeAreaView>  
  );
}

const MenuItemAction=({modalVisible, setModalVisible, setInfo, info, lista, setLista})=>{
  return (        

    <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}>
        
        <View>
          <Text>{modalVisible?"visivel":"invisivel"}</Text>
          <Text>Nome</Text>
          <TextInput style={styles.textInput} placeholder="nome" onChangeText={(text)=>setInfo({...info, nome:text})}/>
          <Text>Descrição</Text>
          <TextInput style={styles.textInput} placeholder="descrição" onChangeText={(text)=>setInfo({...info, descricao:text})}/>
          <Text>Valor</Text>
          <TextInput style={styles.textInput} placeholder="valor" onChangeText={(text)=>setInfo({...info, preco:text})} />

          <Botao title="salvar" onPress={()=>{lista.push(info); setLista([...lista]);
          setModalVisible(false)}} styles={styles.buttonLogin}/>
        </View>
    </Modal>
);

}

const MenuScreen=({navigator})=> {
  const [lista, setLista] = React.useState([])
  const [info, setInfo ] = React.useState({});
  const [modalVisible, setModalVisible ] = React.useState(false);

  return (
    <SafeAreaView>  
        <MenuItemAction modalVisible={modalVisible} setModalVisible={setModalVisible} 
        setInfo={setInfo} info={info} lista={lista} setLista={setLista}/>
      <View>
        <ScrollView >
            
            <FlatList data={lista}
            renderItem={({item})=>{
              return (<View>
                        <Text>{item.nome}</Text>
                        <Text>{item.descricao}</Text>
                        <Text>{item.preco}</Text>
                      </View>)

            }}
            keyExtractor={item => item.id}
            />
            <Botao title="novo item" styles={styles.buttonLogin}
            onPress={()=>{
              setModalVisible(true);
            }} />
            
        </ScrollView>
      </View>
    </SafeAreaView>  
  );
}

const Tab = createBottomTabNavigator();

const PageRestaurante=({navigator})=> {
  return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Restaurante') {
                iconName = focused
                  ? 'restaurant'
                  : 'restaurant';
              } else if (route.name === 'Menu') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',

          }}
        >
          <Tab.Screen name="Restaurante" navigator component={RestauranteScreen} />
          <Tab.Screen name="Menu" component={MenuScreen} />
          

        </Tab.Navigator>  
  );
}


export default PageRestaurante;