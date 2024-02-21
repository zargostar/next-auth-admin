import { useSession } from "next-auth/react";
function useCurrentUser() {
  const { data: currentUser } = useSession();
  const fullname = currentUser?.user.fullname;
  const token = currentUser?.user.access_token;
  const userRoles = currentUser?.user.role;
  return { fullname, token, userRoles };
}
export { useCurrentUser };
