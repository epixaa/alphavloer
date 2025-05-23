/**
 * @param {(string | undefined)[]} args
 */
const classNames = (...args) => {
  return args.filter(Boolean).join(" ");
};

export default classNames;
