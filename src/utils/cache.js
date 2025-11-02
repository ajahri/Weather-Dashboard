export const saveCache = (key, data) => {
  localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
};

export const getCache = (key, maxAge = 60000) => {
  const cached = JSON.parse(localStorage.getItem(key));
  if (!cached) return null;
  if (Date.now() - cached.timestamp > maxAge) return null;
  return cached.data;
};
