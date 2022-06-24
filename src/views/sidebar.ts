import * as vscode from "vscode";

// TODO: anyの排除
export class SideBarView {
  getTreeItem(element: any): vscode.TreeItem {
    return element;
  }

  getChildren(element?: any): vscode.ProviderResult<any[]> {
    if (element) {
      return [];
    }

    return [
      new vscode.TreeItem("1"),
      new vscode.TreeItem("2"),
      new vscode.TreeItem("3"),
    ];
  }
}