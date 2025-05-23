const uniqueId = (prefix = "id-") =>
  prefix + Math.random().toString(32).slice(-4);

export default uniqueId;
