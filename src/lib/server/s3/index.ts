import {
	S3Client,
	GetObjectCommand,
	PutObjectCommand,
	ListObjectsV2Command
} from '@aws-sdk/client-s3';
import {
	AWS_REGION,
	AWS_ACCESS_KEY_ID,
	AWS_SECRET_ACCESS_KEY,
	S3_BUCKET_NAME
} from '$env/static/private';

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

// export async function loadFromS3(path: string): Promise<JSON> {
// 	const getCommand = new GetObjectCommand({
// 		Bucket: S3_BUCKET_NAME,
// 		Key: key
// 	});
// 	try {
// 		const data = await s3.send(getCommand);
// 		const str = await data.Body.transformToString();
// 		console.log('S3 download success ', str);
// 		return str;
// 	} catch (error) {
// 		console.error('S3 download error ', error);
// 		return <JSON>error;
// 	}
// }

export async function getObjects() {
	const command = new ListObjectsV2Command({
		Bucket: S3_BUCKET_NAME,
		MaxKeys: 100
	});

	console.log('Your bucket contains the following objects:\n');
	const response = await s3.send(command);
	return response;
}
