import {
	FlatList,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

const activeContacts = [
	{
		name: "Annette Black",
		image: require("../../assets/client1.png"),
	},
	{
		name: "Courtney Henny",
		image: require("../../assets/client2.png"),
	},
	{
		name: "Guy Hawkins",
		image: require("../../assets/client3.png"),
	},
	{
		name: "Ronald Richards",
		image: require("../../assets/client1.png"),
	},
	{
		name: "Shawn Jones",
		image: require("../../assets/client2.png"),
	},
];

const inactiveContacts = [
	{
		name: "Bessie Cooper",
		image: require("../../assets/client3.png"),
	},
	{
		name: "Fateme Zafarpour",
		image: require("../../assets/client2.png"),
	},
	{
		name: "Annette Black",
		image: require("../../assets/client1.png"),
	},
	{
		name: "Courtney Henny",
		image: require("../../assets/client1.png"),
	},
	{
		name: "Guy Hawkins",
		image: require("../../assets/client1.png"),
	},
	{
		name: "Ronald Richards",
		image: require("../../assets/client1.png"),
	},
	{
		name: "Shawn Jones",
		image: require("../../assets/client1.png"),
	},
];

export default function Page() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Contacts</Text>
				<View>
					<TouchableOpacity>
						<Feather name="search" size={24} color="black" />
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={styles.root}>
				<View style={styles.option}>
					<TouchableOpacity style={styles.optionContainer}>
						<Ionicons
							name="add-circle-outline"
							size={30}
							color="#176EF9"
						/>
						<Text style={styles.textOption}>Add New Contact</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.optionContainer}>
						<Ionicons
							name="person-circle-outline"
							size={30}
							color="#176EF9"
						/>
						<Text style={styles.textOption}>Import Your Contacts</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.activeContact}>
					<Text style={styles.titleList}>Active Contacts</Text>
					<View>
						<FlatList
							data={activeContacts}
							renderItem={({ item }) => (
								<ContactItemActive
									name={item.name}
									image={item.image}
								/>
							)}
							keyExtractor={(item) => item.name}
							scrollEnabled={false}
						/>
					</View>
				</View>
				<View style={styles.inactiveContact}>
					<Text style={styles.titleList}>Inactive Contacts</Text>
					<View>
						<FlatList
							data={activeContacts}
							renderItem={({ item }) => (
								<ContactItemInactive
									name={item.name}
									image={item.image}
								/>
							)}
							keyExtractor={(item) => item.name}
							scrollEnabled={false}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

const ContactItemActive = ({ name, image }) => {
	return (
		<TouchableOpacity
			style={styles.item}
			onPress={() => console.log("Contact pressed:", name)}
		>
			<Image source={image} style={styles.image} />
			<Text style={styles.name}>{name}</Text>
		</TouchableOpacity>
	);
};

const ContactItemInactive = ({ name, image }) => {
	return (
		<TouchableOpacity
			style={styles.item}
			onPress={() => console.log("Contact pressed:", name)}
		>
			<Image source={image} style={styles.image} />
			<Text style={styles.name}>{name}</Text>
			<TouchableOpacity
				style={styles.inviteButton}
				onPress={() => console.log("Invite button pressed for:", name)}
			>
				<Text style={styles.inviteButtonText}>Invite</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

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
	activeContact: {
		paddingHorizontal: 27,
		marginTop: 27,
	},
	inactiveContact: {
		paddingHorizontal: 27,
		marginTop: 27,
	},
	titleList: {
		fontSize: 24,
		fontWeight: "600",
	},
	item: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
	},
	name: {
		marginLeft: 10,
		fontWeight: "600",
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	inviteButton: {
		marginLeft: "auto",
		backgroundColor: "#176EF9",
		paddingVertical: 8,
		paddingHorizontal: 25,
		borderRadius: 14,
	},
	inviteButtonText: {
		color: "white",
		fontWeight: "bold",
	},
});
