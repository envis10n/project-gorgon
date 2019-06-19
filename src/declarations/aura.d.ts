declare enum AuraType {
    NONE,
    BUFF,
    DEBUFF,
}

declare enum AuraEffectType {
    NONE,
    MOD_STAT,
    MOD_ABILITY,
}

declare interface AuraEffect {
    type: AuraEffectType;
    subtype: number;
    modifier?: number;
}

declare interface Aura {
    id: number;
    type: AuraType;
    effects: AuraEffect[];
    school: ElementType;
}
