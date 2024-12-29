const { rejects } = require('assert');
const { exec } = require('child_process');

const commitMessage = process.argv[2];

if (!commitMessage) {
    console.error("❌ Commit message is required! ");
    process.exit(1);
}
const runCommand = (command) => {
    new Promise((res, rej) => {
        exec(command, (err, stdout, stderr) => {
            if (err) {
                console.error(`❌ Error: ${stderr}`);
                rej(stderr);
            } else {
                console.log(`✅ ${stdout}`);
                res(stdout);
            }
        });
    });
}
const runGitCommands = async () => {
    try {
        console.log("🟡 Adding changes...");
        await runCommand('git add .');
        console.log("🟡 Committing changes...");
        await runCommand(`git commit -m "${commitMessage}"`)
        console.log("🟡 Pushing changes...");
        await runCommand('git push');

        console.log("✅ All done!");
    } catch (error) {
        console.error("❌ An error occurred:", error);
    }
}
runGitCommands();