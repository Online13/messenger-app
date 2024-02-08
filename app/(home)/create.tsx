import { ScrollView, StyleSheet, View } from "react-native";
import Option from "@/components/organisms/@create/components/option";
import ContactActive from "@/components/organisms/@create/components/contact";
import { Header } from "@/components/molecules/header";
import { Feather } from "@expo/vector-icons";

export default function Page() {
	return (
		<View style={styles.container}>
			<Header
				title="New conversation"
				icon={<Feather name="search" size={24} color="black" />}
			/>
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
});
