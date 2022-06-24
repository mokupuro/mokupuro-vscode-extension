import * as vscode from "vscode";
import { requestDiscordWebhook } from "../services/request";

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
    requestDiscordWebhook();

    vscode.window.showInformationMessage("稼働報告しました");
  }
}
