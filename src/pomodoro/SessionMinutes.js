import { minutesToDuration } from "../utils/duration";

export default function SessionMinutes({ session, focusDuration, breakDuration }) {
    const sessionDuration = session?.label === "Focusing" ? minutesToDuration(focusDuration) : minutesToDuration(breakDuration);

    return `${sessionDuration} minutes`;
};