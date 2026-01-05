import type { BruleConfig, RulesRecord, AnyHandler, JoinRules } from "./types";

export default class Brule<const Rules extends RulesRecord> {
  config: BruleConfig;
  rules = {} as Rules;

  "~Rules" = null as unknown as Rules;

  constructor(config: BruleConfig = {}) {
    this.config = config;
  }

  rule<const Name extends string, const Handler extends AnyHandler>(
    name: Name,
    handler: Handler
  ): Brule<JoinRules<Rules, Name, Handler>> {
    this.rules[name] = handler;

    return this as any;
  }

  handle<const Name extends keyof Rules>(name: Name, input: any) {
    return this.rules[name]({
      input,
      handle: this.handle,
      some: this.some,
    });
  }

  some<const Name extends keyof Rules>(names: Name[], input: any) {
    return names.some((name) => this.rules[name](input));
  }
}

export { Brule };
