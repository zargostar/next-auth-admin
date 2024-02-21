export { default } from "next-auth/middleware";

export const config = { matcher: ["/"], pages: "/api/auth/signin" };
// export const config = {
//   pages: "/api/auth/signin",
// };
