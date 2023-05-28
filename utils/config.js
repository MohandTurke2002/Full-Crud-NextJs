var domain;

if (process.env.NODE_ENV === "production") {
  domain = "https://full-crud-next-js.vercel.app";
} else {
  domain = "http://localhost:3000";
}

export default domain;
