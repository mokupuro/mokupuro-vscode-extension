/* eslint-disable @typescript-eslint/restrict-template-expressions */

import * as vscode from "vscode";
import { SideBarView } from "./views/sidebar";
import { ViewProvider } from "./providers/ViewProvider";

export function activate(context: vscode.ExtensionContext) {
	const sbv = new SideBarView();
	vscode.window.registerTreeDataProvider("mokupuroVscode", sbv);
}

export function deactivate() {}
