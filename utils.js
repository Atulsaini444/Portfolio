export const calculateExperience = (startDate) => {
    const today = new Date();
    const start = new Date(startDate);

    const diff = today.getTime() - start.getTime();
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    return years;
}