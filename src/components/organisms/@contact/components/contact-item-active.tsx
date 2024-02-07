import { Information } from "@/type";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

type InformationProps = {
	data: Information;
};

export const ContactItemActive = ({ data }: InformationProps) => {

	return (
		<TouchableOpacity
			style={styles.item}
			onPress={() => console.log("Contact pressed:", data.name)}
		>
			<Image source={data.image} style={styles.image} />
			<Text style={styles.name}>{data.name}</Text>
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
});
