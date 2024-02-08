import { PropsWithChildren, createContext, useContext, useState } from "react";

type SessionState = {
	id: string;
};

type SessionAction = {
	login(): void;
	logout(): void;
};

export const SessionContext = createContext<SessionState & SessionAction>({
	id: "1",
	login() {},
	logout() {},
});

export function SessionProvider({ children }: PropsWithChildren) {
	const [sessionId, setSessionId] = useState("1");
	const login = () => {};
	const logout = () => {};

	return (
		<SessionContext.Provider value={{ id: sessionId, login, logout }}>
			{children}
		</SessionContext.Provider>
	);
}

export function useSession() {
	return useContext(SessionContext);
}