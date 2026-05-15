import { route, type Router } from '@better-upload/server';
import { toRouteHandler } from '@better-upload/server/adapters/next';
import { aws } from '@better-upload/server/clients';
import { NextResponse } from 'next/server';

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;
const bucketName = process.env.S3_BUCKET_NAME;

const uploadConfigReady = accessKeyId && secretAccessKey && region && bucketName;

const router: Router | null = uploadConfigReady ? {
  client: aws({
    accessKeyId,
    secretAccessKey,
    region,
  }),
  bucketName,
  routes: {
    inbox: route({
      fileTypes: ['image/*', 'application/pdf'],
      maxFileSize: 10485760,
    }),
  },
} : null;

const handlers = router ? toRouteHandler(router) : null;

export const POST = handlers?.POST ?? (async () => (
  NextResponse.json(
    { error: 'File uploads require AWS S3 configuration.' },
    { status: 503 },
  )
));
