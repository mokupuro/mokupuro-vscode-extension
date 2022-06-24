/* eslint-disable @typescript-eslint/restrict-template-expressions */

import * as vscode from "vscode";
import { SideBarView } from "./views/sidebar";

export function activate(context: vscode.ExtensionContext) {
	const sbv = new SideBarView();
	vscode.window.registerTreeDataProvider("mokupuroVscode", sbv);

	vscode.commands.registerCommand("notify.discord", sbv.notifyDiscord);
}

export function deactivate() {}
