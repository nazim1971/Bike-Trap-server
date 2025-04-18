import { Server } from "http";
import app from "./app";

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  const server: Server = app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
}

export default app;
