import { ScrollView, StyleSheet, View } from "react-native";
import Option from "@/components/organisms/@contact/components/option";
import ContactActive from "@/components/organisms/@contact/components/contact-active";
import ContactInactive from "@/components/organisms/@contact/components/contact-inactive";
import { Feather } from "@expo/vector-icons";
import { Header } from "@/components/molecules/header";

export default function Page() {
	return (
		<View style={styles.container}>
			<Header
				title="Contacts"
				icon={<Feather name="search" size={24} color="black" />}
			/>
			<ScrollView style={styles.root}>
				<Option />
				<ContactActive />
				<ContactInactive />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	root: {
		flex: 1,
		backgroundColor: "white",
	},
});
