"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
// Or
// import select, { Separator } from '@inquirer/select';
;
(async () => {
    const answer = await (0, prompts_1.select)({
        message: 'Select a package manager',
        choices: [
            {
                name: 'npm',
                value: 'npm',
                description: 'npm is the most popular package manager',
            },
            {
                name: 'yarn',
                value: 'yarn',
                description: 'yarn is an awesome package manager',
            },
            new prompts_1.Separator(),
            {
                name: 'jspm',
                value: 'jspm',
                disabled: true,
            },
            {
                name: 'pnpm',
                value: 'pnpm',
                disabled: '(pnpm is not available)',
            },
        ],
    });
    console.log(answer);
})();
