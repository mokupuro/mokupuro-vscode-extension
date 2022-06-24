import * as vscode from "vscode";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// TODO: anyの排除
export class SideBarView {
  getTreeItem(element: any): vscode.TreeItem {
    return element;
  }

  getChildren(element?: any): vscode.ProviderResult<any[]> {
    if (element) {
      return [];
    }
    const item = new vscode.TreeItem("稼働を報告");
    item.command = {
      command: "notify.discord",
      title: "稼働報告",
    };

    return [item];
  }

  notifyDiscord() {
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

    vscode.window.showInformationMessage("稼働報告しました");
  }
}