import * as React from 'react';
import { Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



const RestauranteScreen=({navigator})=> {
  return (
    <View style={{flex:1, display:'flex',  alignContent:'center'}}>
      <View>
        <Text style={{flex:3}}>Nome</Text>
        <TextInput placeholder="nome" />
        <Text style={{flex:3}}>Descrição</Text>
        <TextInput placeholder="descrição" />

        <Button style={{flex:1}} title="Salvar" />
      </View>
    </View>
  );
}

const MenuScreen=({navigator})=> {
  const [lista, setLista] = React.useState([])
  const [info, setInfo ] = React.useState({});
  return (
    <View style={{flex:1, display:'flex',  alignContent:'center'}}>
      <View>
        <Text style={{flex:3}}>Nome</Text>
        <TextInput placeholder="nome" onChangeText={(text)=>setInfo({...info, nome:text})}/>
        <Text style={{flex:3}}>Descrição</Text>
        <TextInput placeholder="descrição" onChangeText={(text)=>setInfo({...info, descricao:text})}/>
        <Text style={{flex:3}}>Valor</Text>
        <TextInput placeholder="valor" onChangeText={(text)=>setInfo({...info, preco:text})} />

        <Button style={{flex:1}} title="Salvar" onPress={()=>{lista.push(info); setLista([...lista])}}/>
      </View>
      <ScrollView >
          <FlatList data={lista}
          renderItem={({item})=>{
            return(<View>
                <Text>{item.nome}</Text>
                <Text>{item.descricao}</Text>
                <Text>{item.preco}</Text>
              </View>
            )

          }}
          keyExtractor={item => item.id}
          
          />
          
      </ScrollView>
    </View>
      
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