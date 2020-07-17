export const requiredField = (value) => {
  if (value) {
    return undefined;
  } else {
    return "Field is required";
  }
};


export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) {
    return `Max length is a ${maxLength} symbols`;
  } else {
    return undefined;
  }
};

export const maxLength100 = maxLengthCreator(100)
export const maxLength20 = maxLengthCreator(20)
