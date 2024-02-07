import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Option() {
	return (
		<View style={styles.option}>
			<TouchableOpacity style={styles.optionContainer}>
				<Ionicons name="add-circle-outline" size={30} color="#176EF9" />
				<Text style={styles.textOption}>Add New Contact</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.optionContainer}>
				<Ionicons name="person-circle-outline" size={30} color="#176EF9" />
				<Text style={styles.textOption}>Import Your Contacts</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	option: {
		marginTop: 10,
	},
	optionContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 27,
		paddingVertical: 5,
	},
	textOption: {
		color: "#176EF9",
		marginLeft: 15,
		fontWeight: "500",
	},
});
