import { loadFromS3 } from '$lib/server/s3/index.js';
import type { Readable } from 'stream';

async function streamToString (stream: Readable): Promise<string> {
	return await new Promise((resolve, reject) => {
	  const chunks: Uint8Array[] = [];
	  stream.on('data', (chunk) => chunks.push(chunk));
	  stream.on('error', reject);
	  stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
	});
  }

export const GET = async ({ url }) => {
	const imageKey = url.searchParams.get("imageKey") || "";
	const s3Object = await loadFromS3(imageKey);

	// const image = s3Object?.Body?.transformToString();
	// const image = await streamToString(s3Object.Body as Readable);
    // await new Promise(resolve => setTimeout(resolve, 3000));
    return new Response(s3Object);
};
