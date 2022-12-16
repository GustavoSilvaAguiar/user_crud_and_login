import { Buffer } from "buffer";

export function encodeToBase64(str) {
  return str && Buffer.from(str, "utf8").toString("base64");
}

export function decodeFromBase64(str) {
  return str && Buffer.from(str, "base64").toString("utf8");
}
