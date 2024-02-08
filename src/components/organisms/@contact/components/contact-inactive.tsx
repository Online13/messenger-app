import { inactiveContacts } from "@/data/inactive-contacts";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ContactItemInactive } from "./contact-item-inactive";

export default function ContactInactive() {
	return (
		<View style={styles.inactiveContact}>
			<Text style={styles.titleList}>Inactive Contacts</Text>
			<View>
				<FlatList
					data={inactiveContacts}
					renderItem={({ item }) => <ContactItemInactive data={item} />}
					keyExtractor={(item) => item.name}
					scrollEnabled={false}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inactiveContact: {
		paddingHorizontal: 27,
		marginTop: 27,
	},
	titleList: {
		fontSize: 24,
		fontWeight: "600",
	},
});
