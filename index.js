import { neon} from '@netlify/neon';
export async function handler(event, context) {
  const sql = neon();
  const [result] = await sql`SELECT NOW()`;
  return {
    statusCode: 200,
    body: JSON.stringify({ time: result.now}),
};
}