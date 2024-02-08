import { SessionProvider } from "@/providers/session-provider";
import { Stack } from "expo-router";

export default function Layout() {
	return (
		<SessionProvider>
			<Stack>
				<Stack.Screen name="(home)" options={{ headerShown: false }} />
				<Stack.Screen
					name="discussion/[id]"
					options={{ headerShown: false }}
				/>
			</Stack>
		</SessionProvider>
	);
}
