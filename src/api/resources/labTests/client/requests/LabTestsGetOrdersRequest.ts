/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface LabTestsGetOrdersRequest {
    /**
     * Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00
     */
    startDate?: Date;
    /**
     * Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59
     */
    endDate?: Date;
    /**
     * Filter by user ID.
     */
    userId?: string;
    /**
     * Filter by patient name.
     */
    patientName?: string;
    /**
     * Filter by order ids.
     */
    orderIds?: string | string[];
    page?: number;
    size?: number;
}
