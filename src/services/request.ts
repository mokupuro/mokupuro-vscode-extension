import axios, { AxiosRequestConfig } from "axios";
import { DISCORD_WEBHOOK_URL } from "../constants/env";

export function requestDiscordWebhook(): void {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: DISCORD_WEBHOOK_URL,
    data: {
      content: "メンバーが稼働開始しました",
    },
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios(options);
}
