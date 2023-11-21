/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const GetMarkersResponse: core.serialization.ObjectSchema<
    serializers.GetMarkersResponse.Raw,
    Vital.GetMarkersResponse
> = core.serialization.object({
    markers: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).ClientFacingMarkerComplete)
    ),
    total: core.serialization.number().optional(),
    page: core.serialization.number().optional(),
    size: core.serialization.number().optional(),
    pages: core.serialization.number().optional(),
});

export declare namespace GetMarkersResponse {
    interface Raw {
        markers: serializers.ClientFacingMarkerComplete.Raw[];
        total?: number | null;
        page?: number | null;
        size?: number | null;
        pages?: number | null;
    }
}
