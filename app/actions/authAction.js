import { getServerSession } from "next-auth";

export async function getSession() {
  return await getServerSession();
}
export async function getCurentUser() {
  const session = await getSession();
  if (!session) return null;

  return session.user;
}
