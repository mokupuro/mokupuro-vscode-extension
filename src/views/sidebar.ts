import * as vscode from "vscode";

// TODO: anyの排除
export class SideBarView {
  constructor() {
  }

  getTreeItem(element: any): vscode.TreeItem {
    return element;
  }

  getChildren(element?: any): Thenable<any[]> {
    return Promise.resolve([]);
  }
}
