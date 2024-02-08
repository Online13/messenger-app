import { ScrollView, StyleSheet, View } from "react-native";
import Option from "@/components/organisms/@create/components/option";
import { Header } from "@/components/organisms/@create/components/header";
import ContactActive from "@/components/organisms/@create/components/contact";

export default function Page() {
	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<Header />
			</View>
			<ScrollView style={styles.root}>
				<Option />
				<ContactActive />
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
