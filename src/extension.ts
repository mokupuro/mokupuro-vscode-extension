import * as vscode from 'vscode';
import { SideBarView } from "./views/sidebar";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "mokupuro-vscode-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('mokupuro-vscode-extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from mokupuro-vscode-extension!');

    const sbv = new SideBarView();
    vscode.window.registerTreeDataProvider("mokupuro-vscode", sbv);
	});

	context.subscriptions.push(disposable);
}



// this method is called when your extension is deactivated
export function deactivate() {}
