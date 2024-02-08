import { Tabs } from "expo-router/tabs";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet ,View} from "react-native";
import { Ionicons, FontAwesome ,FontAwesome5  ,Feather   } from '@expo/vector-icons';

export default function AppLayout() {
  return (
    <SafeAreaView style={styles.root}>
		<StatusBar translucent={false} backgroundColor="white" />
      <Tabs screenOptions={{
          tabBarStyle: { height:  90 },
        }}
      >
        <Tabs.Screen
          // Name of the route to hide.
          name="home"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
          
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="calls"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="phone" size={24} color={color} />          
  )}}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="create"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <View style={{backgroundColor:"#176ef9", padding:30, borderRadius:50, position:"absolute"}}>
                <Feather name="edit-3" color={"white"} size={24} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="contact"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user-friends" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="setting"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-sharp" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "white",
	}
});
