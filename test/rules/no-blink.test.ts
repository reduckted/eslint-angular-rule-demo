import { RuleTester } from '@angular-eslint/test-utils';
import * as parser from '@angular-eslint/template-parser';
import rule from '../../src/rules/no-blink';

new RuleTester({ languageOptions: { parser } }).run('demo', rule, {
    valid: ['<div></div>'],
    invalid: [
        {
            code: '<blink></blink>',
            errors: [
                {
                    messageId: 'doNotBlink',
                    line: 1,
                    column: 1,
                    endLine: 1,
                    endColumn: 8,
                },
            ],
        },
    ],
});
