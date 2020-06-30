import { atom } from "recoil";

export const initialized = atom({
  key: "initialized",
  default: false,
});

export const invitedUser = atom({
  key: "invitedUser",
});
