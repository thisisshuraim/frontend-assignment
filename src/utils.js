const safelyGetValueFromObject = (key, defaultValue, object) => {
	//Convert to string always to avoid surprises
  const value = object[key] + "";
	return value ? value : defaultValue;
}

export { safelyGetValueFromObject };