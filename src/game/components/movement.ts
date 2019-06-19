import { Component } from "ts-ecs";

export type Movement = Component<{
    name: "Movement";
    state: MovementState;
}>;
