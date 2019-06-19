import { Component } from "ts-ecs";

export type Auras = Component<{
    name: "Auras";
    auras: Aura[];
}>;
