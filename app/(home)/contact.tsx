import { ScrollView, StyleSheet, View } from "react-native";
import { Header } from "@/components/organisms/@contact/components/header";
import Option from "@/components/organisms/@contact/components/option";
import ContactActive from "@/components/organisms/@contact/components/contact-active";
import ContactInactive from "@/components/organisms/@contact/components/contact-inactive";

export default function Page() {
	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<Header />
			</View>
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
	headerView: {
		borderBottomWidth: 0.5,
		borderBottomColor: "#000",
	},
});
