import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

type SearchbarProps = {
	onChange(text: string): void;
};

export function Searchbar({ onChange }: SearchbarProps) {
	return (
		<View style={styles.searchBarContainer}>
			<View style={styles.searchBar}>
				<View>
					<AntDesign name="search1" size={24} color="black" />
				</View>
				<View style={styles.inputContainer}>
					<TextInput placeholder="Search" onChangeText={onChange} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	searchBarContainer: {
		width: "100%",
		paddingVertical: 6,
		alignItems: "center",
		paddingHorizontal: 20,
		justifyContent: "center",
		backgroundColor: "white",
	},
	searchBar: {
		width: "100%",
		height: 50,
		gap: 12,
		borderRadius: 20,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 16,
		backgroundColor: "#e9e9e9",
	},
	inputContainer: {
		flex: 1,
	},
});
