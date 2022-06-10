export const getClientErrorMessage = (
  error: Record<string, any> | Record<string, any>[]
) => {
  if (Array.isArray(error)) {
    const messages = error.map((value) => value?.message);
    return messages as string[];
  }
  if (
    typeof error === "object" &&
    Object.prototype.hasOwnProperty.call(error, "data")
  ) {
    const newError = error.errors;
    if (Array.isArray(newError)) {
      const messages = newError.map((value) => value?.message);
      return messages as string[];
    }
    const messages = newError?.message;
    return [messages] as string[];
  }
  return error.message ? [error.message as string] : [error.toString()];
};
export const consoleLogger = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any,
  type: "error" | "info" | "warn" | "log"
) => console[type](error);
