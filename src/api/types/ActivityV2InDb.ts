/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "..";

export interface ActivityV2InDb {
    timestamp: Date;
    data: Record<string, unknown>;
    providerId: string;
    userId: string;
    sourceId: number;
    priorityId: number;
    id: string;
    source: Vital.ClientFacingProvider;
}
