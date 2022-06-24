import axios, { AxiosRequestConfig } from "axios";

export function requestDiscordWebhook(): void {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: "https://discord.com/api/webhooks/989958429844066314/_aSThE6SAZjXWmOm93ttMlL8Z0xX4UOWMiNXG2tWiqaGCoFs25Qgy4Wkl7y2E3OP7SII",
    data: {
      content: "Hello World!",
    },
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios(options);
}
