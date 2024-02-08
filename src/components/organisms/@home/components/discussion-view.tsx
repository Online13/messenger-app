import { Discussion } from "@/type";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type DiscussionViewProps = Discussion;

export function DiscussionView({
	id,
	name,
	time,
	last_discussion,
	draft,
}: DiscussionViewProps) {
	return (
		<Link href={`/discussion/${id}`} asChild>
			<TouchableOpacity style={styles.discussionViewRoot}>
				<View style={styles.discussionView}>
					{/* PDP */}
					<View style={styles.pdp}>
						<Image
							style={styles.image}
							source={{
								uri: `https://i.pravatar.cc/150?img=${id}`,
							}}
						/>
					</View>
					{/* about */}
					<View style={styles.discussionAbout}>
						{/* name --- date */}
						<View style={styles.discussionAboutContent}>
							<Text style={styles.discussionName}>{name}</Text>
							<Text>{time}</Text>
						</View>
						{/* last discussion */}
						<View style={styles.lastDiscussion}>
							<Text numberOfLines={1}>{last_discussion}</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</Link>
	);
}


const styles = StyleSheet.create({
	discussionViewRoot: {
		flex: 1,
		width: "100%",
	},
	discussionView: {
		gap: 12,
		flex: 1,
		width: "100%",
		flexDirection: "row",
		paddingVertical: 6,
	},
	pdp: {
		aspectRatio: 1,
		height: 50,
		borderRadius: 50,
		backgroundColor: "silver",
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	discussionName: {
		fontSize: 16,
		fontWeight: "500",
	},
	discussionAbout: {
		flex: 1,
	},
	discussionAboutContent: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	lastDiscussion: {
		width: "90%",
	},
});
