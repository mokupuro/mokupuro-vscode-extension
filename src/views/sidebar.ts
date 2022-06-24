import * as vscode from "vscode";

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
