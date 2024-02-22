const baseUrlDuendeServer = process.env.NEXTAUTH_ISSUER;
const baseUrlTalajoorServer = process.env.TALAJOOR_SERVER;

const userUrl = `${baseUrlDuendeServer}/user`;
const productUrl = `${baseUrlTalajoorServer}/product`;
console.log("endpoints");
console.log(productUrl);
export { userUrl, productUrl };
