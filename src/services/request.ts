import axios, { AxiosRequestConfig } from "axios";

export function requestDiscordWebhook(): void {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: DISCORD_WEBHOOK_URL,
    data: {
      content: "Hello World!",
    },
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios(options);
}
