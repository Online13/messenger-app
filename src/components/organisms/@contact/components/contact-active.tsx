import { activeContacts } from "@/data/active-contacts";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ContactItemActive } from "./contact-item-active";

export default function ContactActive() {
	return (
		<View style={styles.activeContact}>
			<Text style={styles.titleList}>Active Contacts</Text>
			<View>
				<FlatList
					data={activeContacts}
					renderItem={({ item }) => <ContactItemActive data={item} />}
					keyExtractor={(item) => item.name}
					scrollEnabled={false}
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
