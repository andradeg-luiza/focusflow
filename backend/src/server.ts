import Fastify from "fastify";

const app = Fastify();

app.get("/health", async () => {
  return { status: "ok" };
});

export async function start() {
  try {
    await app.listen({ port: 3333 });
    console.log("🚀 Server running at http://localhost:3333");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
