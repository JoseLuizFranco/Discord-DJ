export default (error?: string | Error): string => {
  let str = 'erro desconhecido';

  if (error) {
    if (typeof error === 'string') {
      str = `🚫erro: ${error}`;
    } else if (error instanceof Error) {
      str = `🚫erro: ${error.message}`;
    }
  }

  return str;
};
