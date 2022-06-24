import axios, { AxiosRequestConfig } from "axios";

export function requestDiscordWebhook(): void {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: "https://discord.com/api/webhooks/989950740145516595/PDgWyUkErpiWXzJ7DHG8y8i4nyYzt9Xl_gj5fMEcNcQQ-lrV0WmM3x_qHtZyLcF4l-qk",
    data: {
      content: "Hello World!",
    },
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios(options);
}
