
export type Discussion = {
	id: string;
	time: string;
	name: string;

	last_discussion: string | null;
	draft: string | null;
};
export type Call = {
	id: string;
	datetime: string;
	name: string;

	type: string
	duration: number; //in second
};
