import {
	S3Client,
	GetObjectCommand,
	PutObjectCommand,
	ListObjectsV2Command,
	type GetObjectOutput
} from '@aws-sdk/client-s3';
import {
	AWS_REGION,
	AWS_ACCESS_KEY_ID,
	AWS_SECRET_ACCESS_KEY,
	S3_BUCKET_NAME
} from '$env/static/private';
import { json } from '@sveltejs/kit';

const s3 = new S3Client({
	region: AWS_REGION,
	credentials: {
		accessKeyId: AWS_ACCESS_KEY_ID,
		secretAccessKey: AWS_SECRET_ACCESS_KEY
	}
});



// export async function saveToS3(path: string, data: JSON) {
// 	const uploadCommand = new PutObjectCommand({
// 		Bucket: S3_BUCKET_NAME,
// 		// Key: key,
// 		Body: data,
// 		ACL: 'public-read'
// 	});
// 	try {
// 		const response = await s3.send(uploadCommand);
// 		console.log('S3 upload success ', response);
// 	} catch (error) {
// 		console.error('S3 upload error ', error);
// 	}
// }

export async function loadFromS3(key: string): Promise<string> {
	const getCommand = new GetObjectCommand({
		Bucket: S3_BUCKET_NAME,
		Key: key
	});

		const data = await s3.send(getCommand);
		const str = await data?.Body?.transformToString("base64");
		console.log('S3 download success ', data);

		return str || "";
}

export async function getObjects() {
	const command = new ListObjectsV2Command({
		Bucket: S3_BUCKET_NAME,
		MaxKeys: 100
	});

	console.log('Your bucket contains the following objects:\n');
	const response = await s3.send(command);
	return response;
}
