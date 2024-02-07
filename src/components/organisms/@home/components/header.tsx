import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>Hello Fateme</Text>
			<View>
				<TouchableOpacity>
					<Ionicons name="notifications-outline" size={24} color="black" />
				</TouchableOpacity>
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: "700",
	},
	header: {
		height: 60,
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: 27,
		backgroundColor: "white",
		justifyContent: "space-between",
	},
});
