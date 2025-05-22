// Original `console.log`
ogConsoleLog = console.log;
// A `p` tag that will contain the console output.
consoleOutLabel = document.getElementById('console-out');

// Override `console.log`
console.log = (a) => {
    // Insert the text into the `p` tag
    consoleOutLabel.innerHTML = consoleOutLabel.innerHTML + `${a}<br>`;
    // Print the text into the Dev Tool's console
    ogConsoleLog(a);
}