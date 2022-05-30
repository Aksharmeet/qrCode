export const request = (text) => {
  const get = {
    method: "GET",
    url: "https://qrcodeutils.p.rapidapi.com/qrcodefree",
    params: {
      text: text,
      validate: "true",
      size: "150",
      type: "svg",
      level: "M",
    },
    headers: {
      "X-RapidAPI-Host": "qrcodeutils.p.rapidapi.com",
      "X-RapidAPI-Key": "71e3b96008mshc36dfc0bf1be573p1e5cacjsnce7739745da3",
    },
  };
  return get;
};
