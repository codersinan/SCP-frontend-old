import { TranslocoMissingHandler, TranslocoConfig } from '@ngneat/transloco';
import { Injectable } from "@angular/core";

@Injectable()
export class CustomMissingHandler implements TranslocoMissingHandler {
  handle(key: string, config: TranslocoConfig) {
    return `Not found key: ${key}`;
  }
}
