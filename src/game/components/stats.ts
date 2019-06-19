import { Component } from "ts-ecs";

export type Stats = Component<{
    name: "Stats";
    stats: { [key: number]: Stat };
}>;
