import { ESLintUtils } from '@typescript-eslint/utils';
import { getTemplateParserServices } from '@angular-eslint/utils';
import { TmplAstElement } from '@angular-eslint/bundled-angular-compiler';

export default ESLintUtils.RuleCreator.withoutDocs({
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Ensures that blink elements are not used',
        },
        schema: [],
        messages: {
            doNotBlink: 'Do not use `blink` elements',
        },
    },
    defaultOptions: [],
    create(context) {
        const parserServices = getTemplateParserServices(context);
        return {
            [`Element$1[name=blink]`](element: TmplAstElement) {
                context.report({
                    loc: parserServices.convertNodeSourceSpanToLoc(
                        element.startSourceSpan
                    ),
                    messageId: 'doNotBlink',
                });
            },
        };
    },
});
