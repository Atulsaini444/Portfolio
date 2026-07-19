export const calculateExperience = (startDate: string): number => {
  const today = new Date();
  const start = new Date(startDate);

  const diff = today.getTime() - start.getTime();
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  return years;
};

export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
