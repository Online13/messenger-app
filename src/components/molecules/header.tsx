import React, { ReactNode } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type HeaderProps = {
	title: string;
	icon: ReactNode;
	onPress?(): void;
};

export function Header({ title, icon, onPress }: HeaderProps) {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>{title}</Text>
			<TouchableOpacity onPress={onPress}>
				{icon}
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: "500",
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
