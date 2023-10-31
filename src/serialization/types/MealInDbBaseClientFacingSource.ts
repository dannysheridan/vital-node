/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const MealInDbBaseClientFacingSource: core.serialization.ObjectSchema<
    serializers.MealInDbBaseClientFacingSource.Raw,
    Vital.MealInDbBaseClientFacingSource
> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    priorityId: core.serialization.property("priority_id", core.serialization.number()),
    sourceId: core.serialization.property("source_id", core.serialization.number()),
    providerId: core.serialization.property("provider_id", core.serialization.string()),
    timestamp: core.serialization.date(),
    name: core.serialization.string(),
    energy: core.serialization.lazyObject(async () => (await import("..")).Energy).optional(),
    macros: core.serialization.lazyObject(async () => (await import("..")).Macros).optional(),
    micros: core.serialization.lazyObject(async () => (await import("..")).Micros).optional(),
    data: core.serialization
        .record(
            core.serialization.string(),
            core.serialization.lazyObject(async () => (await import("..")).ClientFacingFood)
        )
        .optional(),
    source: core.serialization.lazyObject(async () => (await import("..")).ClientFacingSource),
    createdAt: core.serialization.property("created_at", core.serialization.date()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date()),
});

export declare namespace MealInDbBaseClientFacingSource {
    interface Raw {
        id: string;
        user_id: string;
        priority_id: number;
        source_id: number;
        provider_id: string;
        timestamp: string;
        name: string;
        energy?: serializers.Energy.Raw | null;
        macros?: serializers.Macros.Raw | null;
        micros?: serializers.Micros.Raw | null;
        data?: Record<string, serializers.ClientFacingFood.Raw> | null;
        source: serializers.ClientFacingSource.Raw;
        created_at: string;
        updated_at: string;
    }
}