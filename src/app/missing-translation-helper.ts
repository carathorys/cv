import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export class MissingTranslationHelper implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    if (params.interpolateParams) {
      // tslint:disable-next-line:no-string-literal
      return params.interpolateParams['default'] || params.key;
    }
    return params.key;
  }
}
