"use client";

import CSVInput from "@/components/molecules/CSVInput";
import postApi from "@/services/postApi";
import { useState } from "react";

export default function Home() {
    const [schedule, setSchedule] = useState<any>();
    const [scheduleError, setScheduleError] = useState<any>(null);
    const [scheduleIsLoading, setScheduleIsLoading] = useState<boolean>(false);

    const callAPI = async (e: any) => {
        setSchedule(null);
        setScheduleError(null);
        setScheduleIsLoading(true);
        e.preventDefault();
        const { response, error } = await postApi(
            process.env.NEXT_PUBLIC_AWS_ENDPOINT + "schedule",
            {
                body: JSON.stringify(body),
            }
        );
        setSchedule(response);
        setScheduleError(error);
        setScheduleIsLoading(false);
    };

    // const onSubmit = () => {};

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>
                thing:
                {scheduleIsLoading && "loading!"}
                {schedule && schedule.schedule}
                {scheduleError && scheduleError}
            </p>
            <form onSubmit={callAPI}>
                <CSVInput />

                <input type="submit" />
            </form>
        </main>
    );
}

const body = {
    teamsAvailabilities: {
        SEMMEL: [
            [10, 10, 11, 0, 0, 20, 0],
            [10, 10, 11, 0, 20, 30, 20],
            [20, 20, 11, 0, 0, 20, 10],
            [0, 10, 11, 0, 0, 20, 10],
            [0, 10, 11, 1, 20, 30, 20],
            [20, 20, 11, 10, 0, 20, 10],
            [0, 10, 11, 0, 0, 20, 0],
        ],
        HIGHPIE: [
            [10, 20, 0, 0, 10, 20, 20],
            [20, 10, 0, 0, 10, 10, 20],
            [20, 20, 0, 0, 10, 10, 20],
            [20, 10, 0, 0, 10, 10, 0],
            [10, 20, 10, 10, 20, 20, 10],
            [0, 11, 0, 0, 10, 20, 11],
            [20, 10, 0, 0, 10, 20, 10],
        ],
        HUNTEDDO: [
            [0, 30, 10, 10, 0, 0, 0],
            [0, 30, 0, 10, 0, 0, 0],
            [0, 30, 10, 10, 0, 0, 0],
            [0, 30, 0, 10, 0, 0, 0],
            [0, 30, 10, 10, 0, 0, 0],
            [0, 30, 0, 10, 0, 0, 0],
            [0, 30, 10, 10, 0, 0, 0],
        ],
        CUSTARD: [
            [10, 20, 10, 20, 10, 10, 0],
            [0, 20, 10, 10, 0, 0, 0],
            [0, 20, 10, 10, 0, 0, 0],
            [0, 20, 10, 10, 0, 0, 0],
            [10, 20, 10, 20, 10, 10, 10],
            [10, 20, 10, 10, 10, 10, 10],
            [10, 20, 10, 10, 0, 0, 0],
        ],
        DEATH_ROE: [
            [11, 22, 1, 0, 0, 10, 20],
            [21, 30, 20, 20, 20, 30, 20],
            [31, 21, 11, 10, 1, 10, 0],
            [11, 20, 10, 0, 0, 10, 0],
            [11, 11, 10, 0, 0, 10, 0],
            [11, 20, 20, 0, 0, 10, 10],
            [21, 10, 10, 0, 0, 10, 0],
        ],
        PARAKEATS: [
            [10, 0, 0, 0, 1, 0, 0],
            [10, 0, 0, 0, 1, 0, 0],
            [11, 0, 0, 0, 1, 0, 50],
            [11, 0, 11, 0, 1, 0, 0],
            [11, 0, 11, 0, 1, 0, 0],
            [11, 0, 11, 0, 1, 0, 0],
            [11, 0, 11, 0, 1, 0, 0],
        ],
        HANA: [
            [10, 10, 1, 0, 0, 10, 0],
            [1, 10, 1, 0, 10, 10, 10],
            [2, 10, 1, 0, 0, 10, 10],
            [2, 10, 1, 0, 10, 11, 10],
            [2, 10, 1, 0, 0, 11, 11],
            [12, 20, 1, 0, 10, 10, 0],
            [1, 10, 1, 0, 0, 10, 0],
        ],
        "MAT{MELON}": [
            [10, 0, 0, 0, 10, 20, 20],
            [10, 10, 10, 10, 10, 30, 30],
            [21, 10, 10, 10, 10, 10, 20],
            [0, 0, 0, 0, 0, 20, 20],
            [10, 0, 0, 0, 0, 11, 11],
            [11, 20, 10, 10, 10, 30, 30],
            [30, 10, 0, 0, 0, 10, 10],
        ],
    },
};
