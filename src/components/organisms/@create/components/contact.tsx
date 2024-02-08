import { activeContacts } from "@/data/active-contacts";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ContactItemActive } from "./list-contact";

export default function ContactActive() {
	return (
		<View style={styles.activeContact}>
			<Text style={styles.titleList}>Contacts</Text>
			<View>
				<FlatList
					data={activeContacts}
					scrollEnabled={false}
					keyExtractor={(item) => item.name}
					renderItem={({ item }) => <ContactItemActive data={item} />}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	activeContact: {
		paddingHorizontal: 27,
		marginTop: 27,
	},
	titleList: {
		fontSize: 20,
		marginBottom: 12,
		fontWeight: "600",
	},
});
