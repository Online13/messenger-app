import { Link, useLocalSearchParams } from "expo-router";
import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Discussion, Message } from "@/type";
import { MESSAGES } from "@/data/message";
import { useSession } from "@/providers/session-provider";
import { GetDiscussionByIdContainer } from "@/components/containers/get-discussion-by-id-container";
import { GetMessageOfDiscussionContainer } from "@/components/containers/get-messaage-of-discussion-container";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

type DiscussionHeaderProps = Discussion;

function DiscussionHeader({ id, name }: DiscussionHeaderProps) {
	return (
		<View style={styles.appBar}>
			<View style={styles.appBarContent}>
				<Link href="home" asChild>
					<TouchableOpacity style={styles.backBtn}>
						<Entypo name="chevron-left" size={24} color="black" />
					</TouchableOpacity>
				</Link>
				<View style={styles.pdp}>
					<Image
						style={styles.image}
						source={{
							uri: `https://i.pravatar.cc/150?img=${id}`,
						}}
					/>
				</View>
				<View style={styles.infoContent}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.status}>Online</Text>
				</View>
			</View>
			<View>
				<TouchableOpacity>
					<Ionicons name="notifications-outline" size={24} color="black" />
				</TouchableOpacity>
			</View>
		</View>
	);
}

type MessageViewProps = Message;

function MessageView({ type, content, discussionId, owner }: MessageViewProps) {
	const { id } = useSession();
	const isMyMessage = owner.id === id;
	const messageViewStyle: ViewStyle = {
		alignItems: isMyMessage ? "flex-end" : "flex-start",
	};
	const messageContentStyle = {
		backgroundColor: isMyMessage ? "#176EF9" : "white",
	};
	const textContentStyle = {
		color: isMyMessage ? "white" : "black",
	};

	return (
		<View style={[styles.messageView, messageViewStyle]}>
			<View style={[styles.messageContent, messageContentStyle]}>
				<Text style={textContentStyle}>{content}</Text>
			</View>
			<View>
				<Text style={styles.time}>15:30 PM</Text>
			</View>
		</View>
	);
}

function MessageAction() {
	return (
		<View style={styles.messageAction}>
			<View style={styles.form}>
				<View style={styles.emojiBtn}>
					<TouchableOpacity>
						<Entypo name="emoji-happy" size={24} color="black" />
					</TouchableOpacity>
				</View>
				<TextInput
					multiline
					placeholder="love them..."
					style={styles.textInput}
				/>
			</View>
			<TouchableOpacity style={styles.actionBtn}>
				<Feather name="send" size={20} color="white" />
			</TouchableOpacity>
		</View>
	);
}

type MessageMainViewProps = {
	messages: Message[];
};

function MessageMainView({ messages }: MessageMainViewProps) {
	return (
		<View style={styles.messageMainView}>
			<FlatList
				inverted
				data={messages}
				style={styles.messageList}
				contentContainerStyle={styles.messageListContent}
				renderItem={({ item }) => <MessageView {...item} />}
			/>
			<MessageAction />
		</View>
	);
}

export default function Page() {
	const params = useLocalSearchParams() as { id: string };

	return (
		<View style={styles.root}>
			<GetDiscussionByIdContainer id={params.id}>
				{(discussion) => <DiscussionHeader {...discussion} />}
			</GetDiscussionByIdContainer>
			<View style={styles.main}>
				<GetMessageOfDiscussionContainer discussionId={params.id}>
					{(messages) => <MessageMainView messages={messages} />}
				</GetMessageOfDiscussionContainer>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "red",
	},
	appBar: {
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		paddingRight: 27,
		backgroundColor: "white",
		justifyContent: "space-between",
	},
	appBarContent: {
		gap: 6,
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
	},
	backBtn: {
		width: 30,
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	pdp: {
		aspectRatio: 1,
		height: 45,
		borderRadius: 50,
		backgroundColor: "silver",
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	name: {
		fontSize: 18,
		fontWeight: "700",
	},
	status: {
		fontSize: 14,
		fontWeight: "300",
	},
	main: {
		flex: 1,
		backgroundColor: "#f3f3f3",
	},
	infoContent: {
		marginLeft: 6,
	},
	//
	messageView: {
		paddingVertical: 6,
		paddingHorizontal: 12,
	},
	messageContent: {
		maxWidth: 300,
		marginBottom: 4,
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 14,
	},
	//
	messageList: {},
	messageListContent: {
		paddingTop: 20,
		paddingBottom: 50,
	},
	time: {
		color: "gray",
		fontSize: 10,
	},
	//
	messageMainView: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: "#f9f9fb",
	},
	//
	messageAction: {
		gap: 12,
		padding: 16,
		flexDirection: "row",
	},
	form: {
		flex: 1,
		borderWidth: 1,
		borderRadius: 12,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 6,
		borderColor: "#e3e3e3",
		backgroundColor: "white",
	},
	emojiBtn: {},
	textInput: {
		paddingVertical: 6,
		paddingLeft: 12,
	},
	actionBtn: {
		aspectRatio: 1,
		height: 45,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#176EF9",
	},
});
