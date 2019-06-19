import { Component } from "ts-ecs";

export type Position = Component<{
    name: "Position";
    pos: Pos3D;
    zone: number;
    map: number;
}>;
