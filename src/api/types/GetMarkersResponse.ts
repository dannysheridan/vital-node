/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "..";

export interface GetMarkersResponse {
    markers: Vital.ClientFacingMarkerComplete[];
    total?: number;
    page?: number;
    size?: number;
    pages?: number;
}
