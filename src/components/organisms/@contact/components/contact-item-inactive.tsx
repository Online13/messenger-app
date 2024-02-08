import { Information } from "@/type";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

type InformationProps = {
	data: Information;
};

export const ContactItemInactive = ({ data }: InformationProps) => {
	return (
		<TouchableOpacity
			style={styles.item}
			onPress={() => console.log("Contact pressed:", data.name)}
		>
			<Image source={data.image} style={styles.image} />
			<Text style={styles.name}>{data.name}</Text>
			<TouchableOpacity
				style={styles.inviteButton}
				onPress={() => console.log("Invite button pressed for:", data.name)}
			>
				<Text style={styles.inviteButtonText}>Invite</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
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
