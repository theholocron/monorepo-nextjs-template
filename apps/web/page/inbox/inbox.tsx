"use client";

import { Inbox, Login, useAuth } from "../../src/";

export function InboxPage () {
	const [user, logIn] = useAuth();

	if (user?.token) {
		return <Inbox />;
	}

	return <Login onLogIn={logIn} />;
}
