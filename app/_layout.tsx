import { Tabs } from "expo-router/tabs";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

export default function AppLayout() {
  return (
    <SafeAreaView style={styles.root}>
		<StatusBar translucent={false} backgroundColor="white" />
      <Tabs>
        <Tabs.Screen
          // Name of the route to hide.
          name="index"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="home"
          options={{
            headerShown: false,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="calls"
          options={{
            headerShown: false,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="create"
          options={{
            headerShown: false,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="contact"
          options={{
            headerShown: false,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="setting"
          options={{
            headerShown: false,
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
