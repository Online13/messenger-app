import { ScrollView, StyleSheet, View } from "react-native";
import { Header } from "@/components/organisms/@contact/components/header";
import Option from "@/components/organisms/@contact/components/option";
import ContactActive from "@/components/organisms/@contact/components/contact-active";
import ContactInactive from "@/components/organisms/@contact/components/contact-inactive";

export default function Page() {
	return (
		<View style={styles.container}>
			<Header />
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
		borderBottomWidth: 0.5,
		borderBottomColor: "#aaa",
	},
	titleList: {
		fontSize: 24,
		fontWeight: "600",
	},
});
