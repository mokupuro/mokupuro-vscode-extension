import * as vscode from 'vscode';
import { SideBarView } from "./views/sidebar";

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "mokupuro-vscode-extension" is now active!');

	let disposable = vscode.commands.registerCommand('mokupuro-vscode-extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from mokupuro-vscode-extension!');

    const sbv = new SideBarView();
		vscode.window.registerTreeDataProvider("mokupuro-vscode", sbv);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
