import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import Intro from "./services/pages/Introduction/Intro";
import NotePage from "./services/pages/NotePage/NotePage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import NoteProvider from "./services/components/Contexts/NoteProvider/NoteProvider";
import NoteDetails from "./services/components/NoteDetails/NoteDetails";


const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState({});
  const [firstTimeOpen, setFirstTimeOpen] = useState(false);

  const findUser = async () => {
    const result = await AsyncStorage.getItem('user')

    if(result === null) return setFirstTimeOpen(true);
      setUser(JSON.parse(result))
      setFirstTimeOpen(false);
  }

  useEffect(() => {
    findUser();
  }, [])

  const renderNotePage = props => <NotePage {...props} user={user}/>

  if (firstTimeOpen) return <Intro onFinish={findUser} />;
  return (
    <NavigationContainer>
      <NoteProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen 
        component={renderNotePage}
        name='NotePage' />
        <Stack.Screen 
        component={NoteDetails}
        name='NoteDetails'
        />
      </Stack.Navigator>
      </NoteProvider>
      
    </NavigationContainer>

  )
}

export default App;