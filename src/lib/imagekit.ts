import { IK_PRIVKEY, IK_PUBKEY, IK_URL } from "$env/static/private";
import ImageKit from "imagekit";

export const imagekit = new ImageKit({
    publicKey : IK_PUBKEY,
    privateKey : IK_PRIVKEY,
    urlEndpoint : IK_URL 
});

