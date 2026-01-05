import type { Context } from "./context";

export interface BruleConfig {
  name?: string;
}

export type Handler<Input, Output> = (context: Context<Input>) => Output;

export type AnyHandler = Handler<any, any>;

export type RulesRecord = Record<string, AnyHandler>;

export type JoinRules<
  Rules extends RulesRecord,
  Key extends string,
  Value extends AnyHandler
> = Rules & {
  [key in Key]: Value;
};
