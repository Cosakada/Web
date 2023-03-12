import type { PageLoad } from "./(auth)/dashboard/$types";
import { redirect } from "@sveltejs/kit";

export const load: PageLoad = async ({ parent }) => {
	const { session, supabase } = await parent();
	if (!session) {
		throw redirect(303, "/login");
	}

	const { data: testTable } = await supabase.from("test").select("*");
	return {
		testTable,
		user: session.user
	};
};
