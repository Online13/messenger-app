import { ImageSourcePropType } from "react-native";

export type Discussion = {
	id: string;
	time: string;
	name: string;

	last_discussion: string | null;
	draft: string | null;
};

export type Message = {
	content: string;
	discussionId: string;
	owner: { name: string; id: string };
	type: "text" | "audio" | "image" | "file";
};
export type Call = {
	id: string;
	datetime: string;
	name: string;

	type: string
	duration: number; //in second
};

export type Information = {
	name: string;
	image: ImageSourcePropType;
};
