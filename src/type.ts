import { ImageSourcePropType } from "react-native";

export type Discussion = {
	id: string;
	time: string;
	name: string;

	last_discussion: string | null;
	draft: string | null;
};

export type Information = {
	name: string;
	image: ImageSourcePropType;
};
