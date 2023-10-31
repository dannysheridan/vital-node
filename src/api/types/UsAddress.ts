/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface UsAddress {
    firstLine: string;
    secondLine?: string;
    city: string;
    state: string;
    zipCode: string;
    /** Deprecated. Use `second_line` instead to provide the unit number. Subject to removal after 20 Nov 2023. */
    unit?: string;
}