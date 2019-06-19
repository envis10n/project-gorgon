import { System, Entity } from "ts-ecs";

// Components
import { Auras } from "../components/auras";
import { Movement } from "../components/movement";
import { Position } from "../components/position";
import { Stats } from "../components/stats";

export type Creature = Entity<[Auras, Movement, Position, Stats]>;
