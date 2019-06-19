declare enum Stats {
    NONE,
    STR,
    INT,
    DEX,
    CON,
    WIS,
    STA,
}

declare interface Stat {
    value: number;
    base: number;
    mod: number;
}
